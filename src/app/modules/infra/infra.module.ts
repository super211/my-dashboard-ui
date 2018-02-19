import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { JsonpModule, Jsonp, Response} from '@angular/http';
import { RouterModule } from '@angular/router';

import {InfraComponent } from './main/main.component';
import { InfraLeftSidebarComponent } from './utils/infra-left-sidebar.component'
import {InfraSettings } from './infra.settings';
import {InfraRoutes} from './infra.routes';
import { InfraTapDeployComponent } from './tap-deploy/tap-deploy.component';
import { InfraTapPackageComponent } from './tap-package/tap-package.component';

@NgModule({
  imports: [CommonModule, FormsModule, BrowserModule, RouterModule.forChild(InfraRoutes)],
  declarations: [InfraComponent, InfraLeftSidebarComponent, InfraTapDeployComponent, InfraTapPackageComponent],
  exports: [RouterModule]
})

export class InfraModule {

}
