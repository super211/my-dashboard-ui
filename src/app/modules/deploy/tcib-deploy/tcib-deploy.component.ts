import { Component, OnInit } from '@angular/core';
import { TCIBDeployModel } from '../../../models/index';
import { InfraSettings } from '../../infra/infra.settings';

@Component({
  selector: 'app-tcib-deploy',
  templateUrl: './tcib-deploy.component.html',
  styleUrls: ['./tcib-deploy.component.css']
})
export class TcibDeployComponent implements OnInit {


  public tcibDeployModel: TCIBDeployModel;

  public lstComponents;
  public selectedComponent = 1;

  public lstPackages;
  public selectedPackage = 1;

  public lstEnvironments;
  public selectedEnvironment=1;

  public componentNames;
  public branchNames;

  constructor() { }

  ngOnInit() {
    this.tcibDeployModel = new TCIBDeployModel();
    this.componentNames = InfraSettings.componentNames;
    this.lstComponents = ['TCIB', 'CORE', 'ODATA'];
    this.lstPackages = ['FOPM-7.49-20180209.114001-3.war', 'FOPM-7.49-20180209.114001-2.war', 'FOPM-7.49-20180209.114001-1.war'];
    this.lstEnvironments = ['dev', 'sit', 'uat'];

  }

  loadBranchNames(event: any){
    this.branchNames = InfraSettings.branchName.get(event.target.value);
    console.log(this.branchNames);
  }

  doSubmit(){
    
  }

}