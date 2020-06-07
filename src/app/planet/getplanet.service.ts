import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { PlanetModel } from "./planet.model";

@Injectable({
  providedIn: "root"
})
export class getPlanet {
  planetModels: PlanetModel[] = [];
  constructor(private http: HttpClient) {}
  getPlanets() {
    return this.http
      .get("https://assignment-machstatz.herokuapp.com/planet")
      .pipe(
        map((data: any) => {
          let receivedPlanet: PlanetModel[] = [];
          receivedPlanet = [...data];
          return receivedPlanet;
        })
      );
  }
}
