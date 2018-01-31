import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProvisionService } from '../../../services/provision.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {

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
  myjson: any;
  ngOnInit() {

    this.myjson = {
      "branchName": "string",
      "commitMessage": "string",
      "errorLog": "string",
      "exitCode": 0,
      "localRepoPath": "string",
      "propertiesFilePath": "string",
      "propertiesToUpdate": {},
      "remoteRepoURL": "string",
      "repoUserId": "string",
      "repoUserPassword": "string",
      "sshPrivateKeyLocalPath": "string",
      "statusText": "string",
      "successLog": "string"
    };

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

    alert(JSON.stringify({ system: this.system, t24web: this.t24web, t24app: this.t24app, database: this.database }));
    //this.http.post('http://someurl', JSON.stringify({ system: this.system, t24web: this.t24web, t24app: this.t24app, database: this.database }));
    this.provisionService.submitProvisionTap(this.myjson).subscribe((res: any) => {
      alert(JSON.stringify(res));
    })
  }

  backHome() {
    this.router.navigate(['/index']);
  }
}
