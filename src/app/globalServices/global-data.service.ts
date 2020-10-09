import { Injectable } from '@angular/core';
type LocationTypes = 'locationCity' | 'locationCountry' | 'locationCountryCode';
@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private locationData: {
    locationCity: string,
    locationCountry: string,
    locationCountryCode: string,
  } = {
    locationCity: null,
    locationCountry: null,
    locationCountryCode: null,
  };

  constructor() {
    this.locarionDataSeter('frankfurt', 'locationCity');
    this.locarionDataSeter('germany', 'locationCountry');
    this.locarionDataSeter('ca', 'locationCountryCode');
  }

  locarionDataSeter(input: string, locationType: LocationTypes): void{
    this.locationData[locationType] = input;
  }
  locationObjDataGeter(): object{
    return this.locationData;
  }
  locationDataGeter(locationType: LocationTypes): string{
    return this.locationData[locationType];
  }
}
