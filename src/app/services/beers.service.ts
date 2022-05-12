import { Injectable } from '@angular/core';
import { from, map } from 'rxjs';
import { Beer } from '../interfaces/beer';
import { CompleteBeer } from '../interfaces/complete-beer';
@Injectable({
  providedIn: 'root'
})
export class BeersService {

  selectedBeer?: CompleteBeer;

  getBeers(pageNumber: number) {
    return from(fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=15`).then(res => res.json()).then(res => { return res })).pipe(map(item => this.createBeers(item)));
  }

  searchBeers(searchTerm: string) {
    return from(fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=15&beer_name=${searchTerm}`).then(res => res.json()).then(res => { return res })).pipe(map(item => this.createBeers(item)));
  }

  getBeer(id: number) {
    return from(fetch(`https://api.punkapi.com/v2/beers/${id}`).then(res => res.json()).then(res => { return res })).pipe(map(item => this.createCompleteBeer(item)));
  }

  createCompleteBeer(list: any): CompleteBeer {
    return list[0];
  }


  createBeers(list: any): Beer[] {
    const beers = [];
    for (let data of list) {
      beers.push({
        id: data.id,
        abv: data.abv,
        ingredients: data.ingredients,
        name: data.name,
        volume: data.volume
      })
    }
    return beers;
  }

}
