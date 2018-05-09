import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesServices } from '../../services/heroes.services';


@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html'
})
export class BuscadorComponent implements OnInit {

  heroes: any[] = [];
  termino: string;

  constructor( private _activatedRoute: ActivatedRoute, private _heroesService: HeroesServices, private _router: Router ) {}

  ngOnInit() {
    this._activatedRoute.params.subscribe( params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroes( params['termino'] );
    });
  }

  verHeroe(index: number) {
    this._router.navigate( ['/heroe', index] );
 }
}
