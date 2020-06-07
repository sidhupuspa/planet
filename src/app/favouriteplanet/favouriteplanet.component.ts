import { Component, OnInit } from '@angular/core';
import { getPlanet } from '../planet/getplanet.service';
import { PlanetModel } from '../planet/planet.model';

@Component({
  selector: 'app-favouriteplanet',
  templateUrl: './favouriteplanet.component.html',
  styleUrls: ['./favouriteplanet.component.css']
})
export class FavouriteplanetComponent implements OnInit {

  favPlanetModels: PlanetModel[];
  constructor(private getPln: getPlanet) { }

  ngOnInit() {
this.favPlanetModels  = this.getPln.planetModels.filter(x=>x.isFavourite);
  }


}
