import { Component, ElementRef, Input, OnInit, } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css']
})
export class BeerDetailsComponent implements OnInit {


  constructor(private beersService: BeersService, public dialog: MatDialog) {
  }

  beer = this.beersService.selectedBeer;

  ngOnInit(): void {

  }

  logger(item: any){
    console.log(item);
  }

  viewDialog(templateRef: any): void{
    this.beersService.getBeer(this.beer?.id !== undefined ? this.beer?.id : 0).subscribe(value => {
      this.beersService.selectedBeer = value;
      const dialogRef = this.dialog.open(templateRef);
    });
  }

}
