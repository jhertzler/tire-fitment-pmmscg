import { Action } from "@ngrx/store";
// import model/interface from db.json here...

// Action constants
export const LOAD_YEARS = "[Fitment] Load Years";
export const LOAD_YEARS_FAIL = "[Fitment] Load Years Fail";
export const LOAD_YEARS_SUCCESS = "[Fitment] Load Years Success";
export const SET_YEAR = "[Fitment] Set Year";

export const LOAD_MAKES = "[Fitment] Load Makes";
export const LOAD_MAKES_FAIL = "[Fitment] Load Makes Fail";
export const LOAD_MAKES_SUCCESS = "[Fitment] Load Makes Success";
export const SET_MAKE = "[Fitment] Set Make";

export const LOAD_MODELS = "[Fitment] Load Models";
export const LOAD_MODELS_FAIL = "[Fitment] Load Models Fail";
export const LOAD_MODELS_SUCCESS = "[Fitment] Load Models Success";
export const SET_MODEL = "[Fitment] Set Model";

export const LOAD_TRIMS = "[Fitment] Load Trims";
export const LOAD_TRIMS_FAIL = "[Fitment] Load Trims Fail";
export const LOAD_TRIMS_SUCCESS = "[Fitment] Load Trims Success";
export const SET_TRIM = "[Fitment] Set Trim";

// Action creators
export class LoadYears implements Action {
  readonly type = LOAD_YEARS;
}
export class LoadYearsFail implements Action {
  readonly type = LOAD_YEARS_FAIL;
  constructor(public payload: any) {}
}
export class LoadYearsSuccess implements Action {
  readonly type = LOAD_YEARS_SUCCESS;
  constructor(public payload: any) {}
}
export class SetYear implements Action {
  readonly type = SET_YEAR;
  constructor(public payload: any) {}
}

export class LoadMakes implements Action {
  readonly type = LOAD_MAKES;
}
export class LoadMakesFail implements Action {
  readonly type = LOAD_MAKES_FAIL;
  constructor(public payload: any) {}
}
export class LoadMakesSuccess implements Action {
  readonly type = LOAD_MAKES_SUCCESS;
  constructor(public payload: any) {}
}
export class SetMake implements Action {
  readonly type = SET_MAKE;
  constructor(public payload: any) {}
}

export class LoadModels implements Action {
  readonly type = LOAD_MODELS;
}
export class LoadModelsFail implements Action {
  readonly type = LOAD_MODELS_FAIL;
  constructor(public payload: any) {}
}
export class LoadModelsSuccess implements Action {
  readonly type = LOAD_MODELS_SUCCESS;
  constructor(public payload: any) {}
}
export class SetModel implements Action {
  readonly type = SET_MODEL;
  constructor(public payload: any) {}
}

export class LoadTrims implements Action {
  readonly type = LOAD_TRIMS;
}
export class LoadTrimsFail implements Action {
  readonly type = LOAD_TRIMS_FAIL;
  constructor(public payload: any) {}
}
export class LoadTrimsSuccess implements Action {
  readonly type = LOAD_TRIMS_SUCCESS;
  constructor(public payload: any) {}
}
export class SetTrim implements Action {
  readonly type = SET_TRIM;
  constructor(public payload: any) {}
}

// Action types
export type VehicleAction =
  | LoadYears
  | LoadYearsFail
  | LoadYearsSuccess
  | SetYear
  | LoadMakes
  | LoadMakesFail
  | LoadMakesSuccess
  | SetMake
  | LoadModels
  | LoadModelsFail
  | LoadModelsSuccess
  | SetModel
  | LoadTrims
  | LoadTrimsFail
  | LoadTrimsSuccess
  | SetTrim;
