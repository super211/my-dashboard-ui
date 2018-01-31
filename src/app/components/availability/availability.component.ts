import { Component, OnInit } from '@angular/core';
import { EnvHomeView , Product} from '../../models'

@Component({
  selector: 'availability',
  templateUrl: './availability.component.html',
  styleUrls: ['./availability.component.css']
})
export class AvailabilityComponent implements OnInit {

  constructor() { }
  public envHomeView: EnvHomeView;
  products: Product[];
  
  ngOnInit() {
  }

}
