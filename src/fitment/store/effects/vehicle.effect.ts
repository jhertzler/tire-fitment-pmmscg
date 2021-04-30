import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { map, mergeMap, catchError, withLatestFrom } from "rxjs/operators";
import { VehiclesService } from "../../vehicles.service";
import * as fromVehicle from "../actions/vehicle.action";

@Injectable()
export class VehicleEffects {
  constructor(
    private actions$: Actions,
    private store$: Store,
    private vehiclesService: VehiclesService
  ) {}

  loadYears$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromVehicle.LOAD_YEARS),
      mergeMap(() =>
        this.vehiclesService.getYears().pipe(
          map(data => ({
            type: fromVehicle.LOAD_YEARS_SUCCESS,
            payload: data
          })),
          catchError(() => of({ type: fromVehicle.LOAD_YEARS_FAIL }))
        )
      )
    )
  );

  loadMakes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromVehicle.LOAD_MAKES),
      withLatestFrom(this.store$.select(state => state["fitment"]["vehicle"])),
      mergeMap(([action, vehicle]) =>
        this.vehiclesService.getMakes(vehicle.year).pipe(
          map(data => ({
            type: fromVehicle.LOAD_MAKES_SUCCESS,
            payload: data
          })),
          catchError(() => of({ type: fromVehicle.LOAD_MAKES_FAIL }))
        )
      )
    )
  );

  loadModels$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromVehicle.LOAD_MODELS),
      withLatestFrom(this.store$.select(state => state["fitment"]["vehicle"])),
      mergeMap(([action, vehicle]) =>
        this.vehiclesService.getModels(vehicle.year, vehicle.make).pipe(
          map(data => ({
            type: fromVehicle.LOAD_MODELS_SUCCESS,
            payload: data
          })),
          catchError(() => of({ type: fromVehicle.LOAD_MODELS_FAIL }))
        )
      )
    )
  );

  loadTrims$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromVehicle.LOAD_TRIMS),
      withLatestFrom(this.store$.select(state => state["fitment"]["vehicle"])),
      mergeMap(([action, vehicle]) =>
        this.vehiclesService
          .getTrims(vehicle.year, vehicle.make, vehicle.model)
          .pipe(
            map(data => ({
              type: fromVehicle.LOAD_TRIMS_SUCCESS,
              payload: data
            })),
            catchError(() => of({ type: fromVehicle.LOAD_TRIMS_FAIL }))
          )
      )
    )
  );
}
