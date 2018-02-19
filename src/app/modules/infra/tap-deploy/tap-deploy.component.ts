import { Component, OnInit } from '@angular/core';
import { TCIBProvisionModel } from '../../../models/index';
import { InfraSettings } from '../infra.settings';

@Component({
  selector: 'app-tap-deploy',
  templateUrl: './tap-deploy.component.html',
  styleUrls: ['./tap-deploy.component.css']
})
export class InfraTapDeployComponent implements OnInit {

  public tcibProvisionModel: TCIBProvisionModel;
  public componentNames;
  public branchNames;

  constructor() { }

  ngOnInit() {
    this.tcibProvisionModel = new TCIBProvisionModel();
    this.componentNames = InfraSettings.componentNames;
  }

  loadBranchNames(event: any){
    this.branchNames = InfraSettings.branchName.get(event.target.value);
    console.log(this.branchNames);
  }

  doSubmit(){
    
  }
}
