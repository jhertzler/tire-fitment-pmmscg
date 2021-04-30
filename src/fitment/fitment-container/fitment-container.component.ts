import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import * as fromVehicle from "../store/actions/vehicle.action";

@Component({
  selector: "app-fitment-container",
  templateUrl: "./fitment-container.component.html",
  styleUrls: ["./fitment-container.component.css"]
})
export class FitmentContainerComponent implements OnInit {
  year$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["year"]
  );
  make$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["make"]
  );
  model$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["model"]
  );
  trim$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["trim"]
  );

  years$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["years"]
  );
  makes$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["makes"]
  );
  models$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["models"]
  );
  trims$: Observable<any> = this.store.select(
    state => state["fitment"]["vehicle"]["trims"]
  );

  // import the store into the constructor
  constructor(private store: Store<{ years: any[] }>) {}

  ngOnInit() {}

  getYears() {
    this.store.dispatch({ type: fromVehicle.LOAD_YEARS });
  }
  setYear(year: string) {
    this.store.dispatch({
      type: fromVehicle.SET_YEAR,
      payload: { year: year }
    });
    this.store.dispatch({ type: fromVehicle.LOAD_MAKES });
  }
  setMake(make: string) {
    this.store.dispatch({
      type: fromVehicle.SET_MAKE,
      payload: { make: make }
    });
    this.store.dispatch({ type: fromVehicle.LOAD_MODELS });
  }
  setModel(model: string) {
    this.store.dispatch({
      type: fromVehicle.SET_MODEL,
      payload: { model: model }
    });
    this.store.dispatch({ type: fromVehicle.LOAD_TRIMS });
  }
  setTrim(trim: string) {
    this.store.dispatch({
      type: fromVehicle.SET_TRIM,
      payload: { trim: trim }
    });
  }

  // this.store
  //   .select(state => state)
  //   .subscribe(data => {
  //     console.log("data", data);
  //   });
}
