import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tds',
  templateUrl: './tds.component.html',
  styleUrls: ['./tds.component.css']
})
export class TDSComponent implements OnInit {

  constructor(private router: Router) { }
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
  ngOnInit() {
  }

  backHome(){
    this.router.navigate(['/index']);  
  }
  doSubmit(){
    console.log('submitting  form');
  }
}
