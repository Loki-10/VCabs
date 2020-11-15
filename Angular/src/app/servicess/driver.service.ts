import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Driver } from '../models/driver';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

private getUrl : string = "http://localhost:9090/Driver/getDrivers"

private postUrl : string = "http://localhost:9090/Driver/saveDrivers"

private checkUrl : string = "http://localhost:9090/Driver/getDriverByEmail"

private getMatchingDriverUrl  : string  = "http://localhost:9090/Driver/getMatchingDriver"

private updateDriverStatusUrl : string = "http://localhost:9090/Driver/updateDrivers"

private  updateDriverByIdUrl : string = "http://localhost:9090/Driver/updateDriverById"

  constructor(private _httpClient: HttpClient) { }

  getDrivers() : Observable<Driver[]> {
    return this._httpClient.get<Driver[]>(this.getUrl).pipe(
    map( response => response)
      )
  }

  updateDriverById(driver:Driver) : Observable<any>{
    return this._httpClient.post<Driver>(this.updateDriverByIdUrl,driver);
  }

  checkDriver(driver : Driver) : Observable<any>{
    return this._httpClient.post<any>(this.checkUrl,driver);
  }

  saveDrivers(driver : Driver) : Observable<Driver>{
    return this._httpClient.post<Driver>(this.postUrl,driver);
  }

  getDriver(driver : Driver) : Observable<any>{
    return this._httpClient.post<any>(this.getMatchingDriverUrl,driver);
  }

  updateDriverStatus(driver : Driver) : Observable<any>{
    return this._httpClient.put<any>(this.updateDriverStatusUrl,driver);
  }
}
