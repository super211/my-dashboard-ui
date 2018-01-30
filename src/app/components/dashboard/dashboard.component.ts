import { Component, OnInit, ViewChild } from '@angular/core';
import { ServerinfoService } from '../../services/serverinfo.service';
import { Serverinfo, EnvSummary, EnvHomeView } from '../../models/index';
import { NgForm } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Product } from "../../models/index";
import {Port1} from "../../models/index";
import { ProductService } from "../../services/product.service";
import {Port1Service} from "../../services/port1.service";
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public allServerInfos: Serverinfo[];
  public envHomeView: EnvHomeView;
  public envInfos: Map<string, EnvSummary>;
  products: Product[];
  port1s:Port1[];
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

  constructor(private serverinfoService: ServerinfoService, private productService: ProductService, private port1Service: Port1Service, private http: Http) {
  }

  @ViewChild('popup1') popup1: Popup;
  @ViewChild('popup2') popup2: Popup;
  @ViewChild('popup3') popup3: Popup;
  @ViewChild('popup4') popup4: Popup;

  ngOnInit() {
    // this.serverinfoService.getAll().then(sinfos=>this.allServerInfos=sinfos)
    // .catch(x=>{ console.log(x)});

    this.serverinfoService.getEnvSummary().then(envsumm => this.envHomeView = envsumm)
      .catch(x => {
        console.log(x)
      });

    this.productService.getProduct()
      .then(products => this.products = products)
      .catch(error => console.log(<any>error));

    this.port1Service.getPort1()
      .then(port1s => this.port1s = port1s)
      .catch(error => console.log(<any>error));
  }

  getEnvByKey(key: string) {

    let keys = [];
    for (let _key in this.envHomeView.envInfos) {
      keys.push({ key: _key, value: this.envHomeView.envInfos[_key] });
      if (_key === key) {
        return (this.envHomeView.envInfos[key].totalEnvironments);
      }
    }
  }

  ClickButton() {

    this.popup1.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack",
      color: "#3380FF",
      header: "Form...",
      widthProsentage: 40,
      animation: "fadeInUp",
      confirmBtnContent: "Submit"
    }
    this.popup1.show(this.popup1.options);
  }

  ClickButton2() {

    this.popup4.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack",
      color: "#3380FF",
      header: "Server Info...",
      widthProsentage: 40,
      animation: "fadeInUp",
      confirmBtnContent: "OK"
    }
    this.popup4.show(this.popup4.options);
  }

  subpop1() {

    //alert(this.mode);
    if (this.mode == "1") {
      alert("DEV");
      this.system = "DEV";
    } else if (this.mode == "2") {
      this.system = "SIT";
    } else {
      this.system = "UAT";
    }

    this.http.post('http://someurl', JSON.stringify({ tcib: this.tcib, ocs: this.ocs, finServer: this.finServer, database: this.database }));

    this.popup1.hide();
  }

  subpop2() {

    if (this.mode == "1") {
      alert("DEV");
      this.system = "DEV";
    } else if (this.mode == "2") {
      this.system = "SIT";
    } else {
      this.system = "UAT";
    }

    this.http.post('http://someurl', JSON.stringify({ system: this.system, t24web: this.t24web, t24app: this.t24app, database: this.database }));

    this.popup2.hide();
  }

  subpop3() {

    if (this.mode == "1") {
      alert("DEV");
      this.system = "DEV";
    } else if (this.mode == "2") {
      this.system = "SIT";
    } else {
      this.system = "UAT";
    }

    this.http.post('http://someurl', JSON.stringify({ system: this.system, tdsapp: this.tdsapp, database: this.database }));

    this.popup3.hide();
  }

  subpop4() {

    if (this.mode == "1") {
      alert("DEV");
      this.system = "DEV";
    } else if (this.mode == "2") {
      this.system = "SIT";
    } else {
      this.system = "UAT";
    }

    this.http.post('http://someurl', JSON.stringify({ system: this.system, tdsapp: this.tdsapp, database: this.database }));

    this.popup4.hide();
  }

  ClickOtherButton() {

    this.popup3.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack",
      color: "#3380FF",
      header: "Form...",
      widthProsentage: 40,
      animation: "fadeInUp",
      confirmBtnContent: "Submit"
    }
    this.popup3.show(this.popup3.options);
  }

  ClickAnotherButton() {

    this.popup2.options = {
      cancleBtnClass: "btn btn-default",
      confirmBtnClass: "btn btn-mbe-attack",
      color: "#3380FF",
      header: "Form...",
      widthProsentage: 40,
      animation: "fadeInUp",
      confirmBtnContent: "Submit"
    }
    this.popup2.show(this.popup2.options);
  }
}
