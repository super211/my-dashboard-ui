import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppInMemoryDbService } from './app-in-memory-db.service';
import { EnvironmentService} from './environment.service';
import { ServerinfoService } from './serverinfo.service'
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(AppInMemoryDbService)
  ],
  declarations: [],
  providers: [
    EnvironmentService,
    AuthService,
    ServerinfoService]
})
export class AppInMemoryDbModule {
}
