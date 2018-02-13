import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvisionService } from '../../../services/provision.service';
import { CmdInfo } from '../../../models/index';

@Component({
  selector: 'app-tds2',
  templateUrl: './tds2.component.html',
  styleUrls: ['./tds2.component.css']
})
export class TDS2Component implements OnInit {

  constructor(private router: Router, private provisionService: ProvisionService) { }
  dev: string;
  system: string;
  tcib: string;
  ocs: string;
  finServer: string;
  database: string;
  mode: string;
  t24web: string;
  t24app: string;
  tdsapp: string;
  tdsip: string;
  rdshostname: string;
  rdsport: string;
  rdsusername: string;
  rdsdbname: string;
  rdspassword: string;
  time: string;
  provisionCommandInfo: CmdInfo;
  public result: CmdInfo;
  public resutlExitCode: string;
  public resultMsg: any;

  ngOnInit() {

    this.provisionCommandInfo = new CmdInfo();
    // this.provisionCommandInfo.branchName = "master", //required
    this.provisionCommandInfo.commitMessage = "Provision new T24 Instance", //required
      this.provisionCommandInfo.errorLog = "",
      this.provisionCommandInfo.exitCode = 0,
      // this.provisionCommandInfo.localRepoPath = "tmp",
      this.provisionCommandInfo.propertiesFilePath = "tds.aws.install.properties ", //Required
      this.provisionCommandInfo.propertiesToUpdate = [{ 'rds_dbname': 'devopsdashboard' }, { 'rds_username': 'postgres' }], //Required
      // this.provisionCommandInfo.remoteRepoURL = "https://bitbucket.org/agiledevopshub/tap-cicd.git", //Required
      // this.provisionCommandInfo.repoUserId = "devopsadm",
      // this.provisionCommandInfo.repoUserPassword = "Dev-Dummy3",
      // this.provisionCommandInfo.sshPrivateKeyLocalPath = "string",
      this.provisionCommandInfo.statusText = "string",
      this.provisionCommandInfo.successLog = "string"

  }

  doSubmit() {
    console.log('submitting  form');

    if (this.mode == "1") {
      this.system = "DEV";
    } else if (this.mode == "2") {
      this.system = "SIT";
    } else {
      this.system = "UAT";
    }

    // alert(JSON.stringify({ system: this.system, t24web: this.t24web, t24app: this.t24app, database: this.database }));
    //alert(JSON.stringify({ tdsip: this.tdsip, rdshostname: this.rdshostname, rdsport: this.rdsport, rdsusername: this.rdsusername, rdsdbname: this.rdsdbname, rdspassword: this.rdspassword, time: this.time }));
    //this.http.post('http://someurl', JSON.stringify({ system: this.system, t24web: this.t24web, t24app: this.t24app, database: this.database }));
    this.provisionCommandInfo.propertiesToUpdate = {
      // 'webIp': this.t24web,
      // 'appIp': this.t24app,
      'tds_ip': this.tdsip,
      'rds_hostname': this.rdshostname,
      'rds_port': this.rdsport,
      'rds_username': this.rdsusername,
      'rds_dbname': this.rdsdbname,
      'rds_password': this.rdspassword,
      'time': this.time,

    };

    this.provisionService.submitProvisionTds(this.provisionCommandInfo).subscribe((res: CmdInfo) => {
      //alert(JSON.stringify(res));
      this.result = res;
      //this.resutlExitCode = res.branchName;
      //alert(res.statusText);

      // document.getElementById("demo").innerHTML = this.resultMsg;
    }, this.handleError,
      this.handleCompleted);
  }

  backHome() {
    this.router.navigate(['/index']);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred: ', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  private handleCompleted() {
    console.log("the subscription is completed");
  }
}
