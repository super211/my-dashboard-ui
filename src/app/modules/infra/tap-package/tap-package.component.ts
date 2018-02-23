import { Component, OnInit } from '@angular/core';
import { TCIBProvisionModel } from '../../../models/index';
import { TapPackageModel } from '../../../models/index';
import { InfraSettings } from '../infra.settings';


@Component({
  selector: 'app-tap-package',
  templateUrl: './tap-package.component.html',
  styleUrls: ['./tap-package.component.css']
})
export class InfraTapPackageComponent implements OnInit {
  public tcibProvisionModel: TCIBProvisionModel;
  //public tapPackageModel: TapPackageModel;
  public componentNames;
  public branchNames;

  constructor() { }

  ngOnInit() {
    this.tcibProvisionModel = new TCIBProvisionModel();
    //this.tapPackageModel = new TapPackageModel();
    this.componentNames = InfraSettings.componentNames;
    this.tcibProvisionModel.selectedComponent = '-1'; // to show the default selection
    this.tcibProvisionModel.selectedBranch = '-1'; // to show the default selection
  }

  showSubmitButton(): boolean {
    if(this.tcibProvisionModel.selectedComponent
      && this.tcibProvisionModel.selectedComponent !== '-1'
      && this.tcibProvisionModel.selectedBranch
      && this.tcibProvisionModel.selectedBranch !== '-1'){
        return true;
      }
  }

  loadBranchNames(event: any){
    this.branchNames = InfraSettings.branchName.get(event.target.value);
    console.log(this.branchNames);
  }

  doSubmit(){
    
  }
}
