import { Component, OnInit } from '@angular/core';
import { EnvHomeView , Product} from '../../models';
import { ProvisionService } from '../../services/provision.service';

@Component({
  selector: 'availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css'],
  providers: []
})
export class AvailabilityComponent implements OnInit {

  constructor(private provisionService : ProvisionService) { }
  public envHomeView: EnvHomeView;
  products: Product[];
  
  ngOnInit() {
  }

}
