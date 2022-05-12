import { Component, Input } from '@angular/core';
import { Beer } from '../interfaces/beer';

@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent {

  constructor() {
  }

  @Input() beer?: Beer;

  log(msg: any){
    console.log(msg);
  }

}
