import { Component, OnInit } from '@angular/core';
import { JobStatusNotificationModel } from '../../../models/index';
import { TCIBDeployModel } from '../../../models/index';
import { InfraSettings } from '../../infra/infra.settings';
import { ProvisionCommand } from '../../../models/ProvisionCommand';
import { JobdispatcherService } from '../../../services/jobdispatcher.service';
import { Http } from '@angular/http';
import { AnonymousSubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-tcib-deploy',
  templateUrl: './tcib-deploy.component.html',
  styleUrls: ['./tcib-deploy.component.css']
})
export class TcibDeployComponent implements OnInit {

  public inProgress: boolean;
  public percentComplete: number;
  public provisionCommand: ProvisionCommand;
  public result: ProvisionCommand;

  public tcibDeployModel: TCIBDeployModel;

  public lstComponents;
  public selectedComponent = 1;

  public lstPackages;
  public selectedPackage = 1;

  public lstEnvironments;
  public selectedEnvironment=1;

  public componentNames;
  public branchNames;

  private currentNotification;
  private jobStatusSubscription: AnonymousSubscription;
  private timerSubscription: AnonymousSubscription;
  public jobStatusNotifications: JobStatusNotificationModel[];

  constructor(private jobdispatcherService: JobdispatcherService, private http: Http) { }

  ngOnInit() {
    this.inProgress = false;
    this.percentComplete = 5;
    this.tcibDeployModel = new TCIBDeployModel();
    this.tcibDeployModel.time = Date.now().toString();
    this.provisionCommand = new ProvisionCommand(); //it should be initialized first!!
    this.provisionCommand.propertiesFilePath = 'tcib.deploy.properties';
    this.componentNames = InfraSettings.componentNames;
    this.lstComponents = ['TCIB', 'CORE', 'ODATA'];
    this.lstPackages = ['FOPM-7.49-20180209.114001-3.war', 'FOPM-7.49-20180209.114001-2.war', 'FOPM-7.49-20180209.114001-1.war'];
    this.lstEnvironments = ['dev', 'sit', 'uat'];

    //this.loadFopmList();
    this.jobStatusNotifications = [];
    this.currentNotification = new JobStatusNotificationModel();
    this.currentNotification.id = 0;
    this.refreshStatus();

  }

  loadBranchNames(event: any){
    this.branchNames = InfraSettings.branchName.get(event.target.value);
    console.log(this.branchNames);
  }

  onChanges(envent : any){
    console.log("On Changes!");
  }

  doSubmit(){
    this.inProgress = true;
    this.provisionCommand.commitMessage = 'Deploy Package [' + this.tcibDeployModel.form_war + '] with timestamp: ' + this.tcibDeployModel.time; 

    this.provisionCommand.propertiesToUpdate = this.tcibDeployModel;
    this.jobdispatcherService.postJobDispatcherCommand(this.provisionCommand).subscribe((res: ProvisionCommand) => {
      //alert(JSON.stringify(res));
      this.result = res;
      //this.resutlExitCode = res.branchName;
      //alert(res.statusText);
      this.percentComplete = 25;
      // document.getElementById("demo").innerHTML = this.resultMsg;
      this.inProgress = false;
    }, this.handleError,
      this.handleCompleted);
  }

  loadFopmList(): void{
    this.http.get('http://10.198.105.148/serverinfo/fopmwarset').subscribe(data => {
      this.lstPackages = data.json().fopmwarset;

      for(let i=0; i<this.lstPackages.length; i++){
        if(this.endsWith(this.lstPackages[i], '.wa')){
          let newNm = this.lstPackages[i] + 'r';
          this.lstPackages[i] = newNm;
        }
      }
    });
  }

  refreshStatus(){

  }

  private endsWith(str, suffix): boolean{
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    this.inProgress = false;
    return Promise.reject(error.message || error);
  }

  private handleCompleted() {
    //this.inProgress = false;
    this.tcibDeployModel.time = Date.now().toString();
    console.log("the subscription is completed");
  }

}