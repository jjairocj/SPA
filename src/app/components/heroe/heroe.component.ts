import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesServices } from '../../services/heroes.services';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe: any = {};

  constructor( private _activatedRoute: ActivatedRoute,
    private _heroesService: HeroesServices) {
    this._activatedRoute.params.subscribe( params => {
       this.heroe = this._heroesService.getHero(params['id']);
    });
  }

}
