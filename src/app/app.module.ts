import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { FitmentModule } from "../fitment/fitment.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { VehicleEffects } from "../fitment/store/effects/vehicle.effect";

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    FitmentModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([VehicleEffects])
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
