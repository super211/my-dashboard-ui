import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AvailabilityComponent } from './components/availability/availability.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { EnvDetailsComponent } from './components/env-details/env-details.component';

const routes: Routes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: DashboardComponent},
    { path: 'envdetails/:envCat', component: EnvDetailsComponent},
    { path: 'availability', component: AvailabilityComponent},
    { path: 'login', component: LoginComponent}];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }