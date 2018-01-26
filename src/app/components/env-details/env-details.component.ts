import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServerinfoService } from '../../services/serverinfo.service';
import { Serverinfo , EnvSummary, EnvHomeView} from '../../models';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-env-details',
  templateUrl: './env-details.component.html',
  styleUrls: ['./env-details.component.css']
})
export class EnvDetailsComponent implements OnInit, OnDestroy {

  envCat: string;
  private sub: any;
  public envHomeView: EnvHomeView;
  public envDtlView: Serverinfo[];

  constructor(private route:ActivatedRoute, private serverinfoService : ServerinfoService) { }

  ngOnInit() {
    this.sub= this.route.params.subscribe(params=>{
    this.envCat=params['envCat'];
    this.serverinfoService.getEnvSummary().then(envsumm=>this.envHomeView=envsumm)
    .catch(x=>{ console.log(x)});
    });
  }
  fetchDetails(envCode:string){
    this.serverinfoService.getEnvCatDetails(envCode).then(envsumm=>this.envDtlView=envsumm)
    .catch(x=>{ console.log(x)});
  }
  ngOnDestroy(){

  }

}
