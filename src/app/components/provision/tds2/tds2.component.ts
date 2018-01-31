import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tds2',
  templateUrl: './tds2.component.html',
  styleUrls: ['./tds2.component.css']
})
export class TDS2Component implements OnInit {

  constructor() { }
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

}
