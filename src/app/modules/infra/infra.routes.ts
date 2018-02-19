//import { JsonpModule, Jsonp, Response} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {InfraComponent } from './main/main.component';
import { InfraTapPackageComponent } from './tap-package/tap-package.component';
import { InfraTapDeployComponent } from './tap-deploy/tap-deploy.component';

export const InfraRoutes: Routes = [
  {path: 'infra', component: InfraComponent, children: [
    {path: '', pathMatch: 'full', component: InfraComponent},
    {path: 'main', component: InfraComponent },
    {path: 'tapPackage', component: InfraTapPackageComponent},
    {path: 'tapDeploy', component: InfraTapDeployComponent}
  ]
}];