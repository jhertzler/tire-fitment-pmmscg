import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VehiclesService {
  constructor(private http: HttpClient) {}

  getYears() {
    return this.http.get("https://6080be3273292b0017cdbf2a.mockapi.io/years");
  }

  getMakes(year: string) {
    return this.http.get(
      "https://6080be3273292b0017cdbf2a.mockapi.io/makes?year=" + year
    );
  }

  getModels(year: string, make: string) {
    return this.http.get(
      "https://6080be3273292b0017cdbf2a.mockapi.io/models?year=" +
        year +
        "&make=" +
        make
    );
  }

  getTrims(year: string, make: string, model: string) {
    return this.http.get(
      "https://6080be3273292b0017cdbf2a.mockapi.io/trim?year=" +
        year +
        "&make=" +
        make +
        "&model=" +
        model
    );
  }

  // Year
  // https://6080be3273292b0017cdbf2a.mockapi.io/years

  // Make with year (2021)
  // https://6080be3273292b0017cdbf2a.mockapi.io/makes

  // Model with year and make (Acura)
  // https://6080be3273292b0017cdbf2a.mockapi.io/models

  // Trim with year, make, model (RDX)
  // https://6080be3273292b0017cdbf2a.mockapi.io/trim
}
