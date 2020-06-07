import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { PlanetComponent } from "./planet/planet.component";

import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";
import { FavouriteplanetComponent } from "./favouriteplanet/favouriteplanet.component";

const routes: Routes = [
  // { path: "", component: AppComponent },
  { path: "planets", component: PlanetComponent },
  { path: "favplanet", component: FavouriteplanetComponent }
];

@NgModule({
  declarations: [AppComponent, PlanetComponent, FavouriteplanetComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
