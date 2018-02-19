import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { JsonpModule, Jsonp, Response } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AvailabilityComponent } from './components/availability/availability.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { PageFooterComponent } from './components/page-footer/page-footer.component';
import { PageSidebarComponent } from './components/page-sidebar/page-sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { KeysPipe } from './components/keyspipe.pipe';
import { AppInMemoryDbService } from './services/app-in-memory-db.service'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryDbModule } from './services/app-in-memory-db.module';

import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { EnvDetailsComponent } from './components/env-details/env-details.component';
import { PageDrop } from "./components/page-header/page-drop.component";
import { ProductService } from "./services/product.service";
import { Port1Service } from "./services/port1.service";
import { ProvisionService } from './services/provision.service';
import { PackageService } from './services/package.service';
import { JobdispatcherService } from "./services/jobdispatcher.service";
import { TapComponent } from './components/provision/tap/tap.component';
import { TDSComponent } from './components/provision/tds/tds.component';
import { T24Component } from './components/provision/t24/t24.component';
import { TDS2Component } from './components/provision/tds2/tds2.component';
import { NumberIteratorPipe } from './components/number-iterator.pipe';
import { PackageComponent } from './components/provision/package/package.component';
import { BuildComponent } from './components/provision/build/build.component';

import { InfraModule } from './modules/infra/infra.module';

@NgModule({
  declarations: [
    AppComponent,
    AvailabilityComponent,
    DashboardComponent,
    PageHeaderComponent,
    PageFooterComponent,
    PageSidebarComponent,
    LoginComponent,
    KeysPipe,
    EnvDetailsComponent,
    PageDrop,
    TapComponent,
    TDSComponent,
    T24Component,
    TDS2Component,
    NumberIteratorPipe,
    PackageComponent,
    BuildComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AppInMemoryDbModule,
    JsonpModule,
    InMemoryWebApiModule.forRoot(AppInMemoryDbService, { passThruUnknownUrl: true }),
    InfraModule
  ],
  providers: [ProductService, Port1Service, JobdispatcherService, PackageService, ProvisionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
