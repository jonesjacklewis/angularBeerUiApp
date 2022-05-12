import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Beer } from '../interfaces/beer';
import { BeersService } from '../services/beers.service';
import { BeerDetailsComponent } from '../beer-details/beer-details.component';
@Component({
  selector: 'app-beer',
  templateUrl: './beer.component.html',
  styleUrls: ['./beer.component.css']
})
export class BeerComponent {

  constructor(private beersService: BeersService, public dialog: MatDialog) {

  }

  @Input() beer?: Beer;

  viewMore(){
    this.beersService.getBeer(this.beer?.id !== undefined ? this.beer?.id : 0).subscribe(value => {
      this.beersService.selectedBeer = value;
      const dialogRef = this.dialog.open(BeerDetailsComponent);
    });

  }




}
