import { Component, OnInit } from '@angular/core';
import { PackageService } from "../../../services/package.service";
import { Package } from "../../../models/index";

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.css']
})

export class BuildComponent implements OnInit {

  public packages: Package[];

  sellists = [
    { id: 1, name: "" },
    { id: 2, name: "TCIB" }
  ];
  selectedValue = 1;

  constructor(private packageService: PackageService) { }

  ngOnInit() {
    this.packageService.getPackage()
      .then(packages => {
      this.packages = packages;
        //alert(packages[0]); 
        //alert(this.packages);
      })
      .catch(error => console.log(<any>error));
    //alert(this.packages[0].lastUpdated);
    //console.log(this.packages[0].lastUpdated);
  }


  onChanges(event: any) {
    console.log("On Changes!");
  }

  doSubmit() {
    console.log("On Submit!")
  }

}
