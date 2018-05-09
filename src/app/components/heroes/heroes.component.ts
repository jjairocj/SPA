import { Component, OnInit } from '@angular/core';
import { HeroesServices, IHeroe } from '../../services/heroes.services';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes: IHeroe[] = [];

  constructor( private _heroesServices: HeroesServices, private _router: Router ) {
    // console.log('constructor');
  }

  ngOnInit() {
    this.heroes = this._heroesServices.getHeroes();
  }

  verHeroe(index: number) {
     this._router.navigate( ['/heroe', index] );
  }
}
