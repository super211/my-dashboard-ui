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
import { PopupModule } from 'ng2-opd-popup';

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
    PageDrop
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    AppInMemoryDbModule,
    JsonpModule,
    PopupModule.forRoot(),
    InMemoryWebApiModule.forRoot(AppInMemoryDbService, { passThruUnknownUrl: true })
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
