import { Component, OnInit } from "@angular/core";
import { getPlanet } from "./getplanet.service";
import { PlanetModel } from "./planet.model";
import { Subscription } from "rxjs";

@Component({
  selector: "app-planet",
  templateUrl: "./planet.component.html",
  styleUrls: ["./planet.component.css"]
})
export class PlanetComponent implements OnInit {
  constructor(private getPln: getPlanet) {}
  planetModels: PlanetModel[];
  subsc: Subscription;
  checkboxFlag: boolean = false;
  ngOnInit() {
    if (this.getPln.planetModels.length == 0) {
      this.getPlanetsList();
    }
    this.planetModels = this.getPln.planetModels;
  }

  getPlanetsList() {
    this.subsc = this.getPln.getPlanets().subscribe(rceived => {
      this.getPln.planetModels = rceived;
      this.planetModels = rceived;
    });
  }
  ngOnDestroy() {
    if (this.subsc) {
      this.subsc.unsubscribe();
    }
  }
  onAddedToFavourite(isChecked, id) {
    const index = this.planetModels.findIndex(x => x.id == id);
    this.planetModels[index].isFavourite = isChecked;
  }
}
