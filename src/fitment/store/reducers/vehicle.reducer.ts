// HOW TO SET UP A reducer.ts FILE:
// Import actions and interfaces
// Create interface for initial state
// Create initial state
// Create reducer function and pass in initial state and actions.
// Return new state

import * as fromVehicle from "../actions/vehicle.action";

export interface VehicleState {
  year: string;
  years: string[];
  make: string;
  makes: string[];
  model: string;
  models: string[];
  trim: string;
  trims: string[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: VehicleState = {
  year: "",
  years: [],
  make: "",
  makes: [],
  model: "",
  models: [],
  trim: "",
  trims: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromVehicle.VehicleAction
): VehicleState {
  switch (action.type) {
    case fromVehicle.LOAD_YEARS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_YEARS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_YEARS_SUCCESS: {
      return {
        ...state,
        years: action.payload.year,
        loaded: true,
        loading: false
      };
    }
    case fromVehicle.SET_YEAR: {
      return {
        ...state,
        year: action.payload.year,
        make: "",
        makes: [],
        model: "",
        models: [],
        trim: "",
        trims: []
      };
    }
    case fromVehicle.LOAD_MAKES: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_MAKES_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_MAKES_SUCCESS: {
      return {
        ...state,
        makes: action.payload.make,
        loaded: true,
        loading: false
      };
    }
    case fromVehicle.SET_MAKE: {
      return {
        ...state,
        make: action.payload.make,
        model: "",
        models: [],
        trim: "",
        trims: []
      };
    }
    case fromVehicle.LOAD_MODELS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_MODELS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_MODELS_SUCCESS: {
      return {
        ...state,
        models: action.payload.model,
        loaded: true,
        loading: false
      };
    }
    case fromVehicle.SET_MODEL: {
      return {
        ...state,
        model: action.payload.model,
        trim: "",
        trims: []
      };
    }
    case fromVehicle.LOAD_TRIMS: {
      return {
        ...state,
        loading: true
      };
    }
    case fromVehicle.LOAD_TRIMS_FAIL: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    case fromVehicle.LOAD_TRIMS_SUCCESS: {
      return {
        ...state,
        trims: action.payload.trim,
        loaded: true,
        loading: false
      };
    }
    case fromVehicle.SET_TRIM: {
      return {
        ...state,
        trim: action.payload.trim
      };
    }
    default: {
      return state;
    }
  }
}
