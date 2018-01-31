import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AvailabilityComponent } from './components/availability/availability.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EnvDetailsComponent } from './components/env-details/env-details.component';
import { TapComponent } from './components/provision/tap/tap.component';
import { TDSComponent } from './components/provision/tds/tds.component';
import { T24Component } from './components/provision/t24/t24.component';
import { TDS2Component } from './components/provision/tds2/tds2.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DashboardComponent},
    { path: 'envdetails/:envCat', component: EnvDetailsComponent},
    { path: 'availability', component: AvailabilityComponent},
    {path: 'provision/t24', component: T24Component},
    {path: 'provision/tap', component: TapComponent},
    {path: 'provision/tds', component: TDSComponent},
    {path: 'provision/tds2', component: TDS2Component},
    { path: 'login', component: LoginComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }