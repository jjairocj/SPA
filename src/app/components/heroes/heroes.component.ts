import { Component, OnInit } from '@angular/core';
import { HeroesServices, IHeroe } from '../../services/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor( private _heroesServices: HeroesServices ) {
    console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

}
