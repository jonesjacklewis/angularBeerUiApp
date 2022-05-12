import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Observable } from 'rxjs';
import { Beer } from '../interfaces/beer';
import { BeersService } from '../services/beers.service';

@Component({
  selector: 'app-beers',
  templateUrl: './beers.component.html',
  styleUrls: ['./beers.component.css']
})
export class BeersComponent implements OnInit {

  constructor(private beersService: BeersService) {
    this.setCurrentPage();
    this.beers = beersService.getBeers(this.currentPage);
  }

  ngOnInit(): void {
    this.beers.subscribe(next => this.beersList = next);
  }



  currentPage: number = -1;
  beers: Observable<any[]>;
  beersList?: Beer[];


  setCurrentPage(event?:PageEvent){
    this.currentPage = (event?.pageIndex || 0) + 1;
    this.beers =  this.beersService.getBeers(this.currentPage);
    this.beers.subscribe(next => this.beersList = next);
  }

}