import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ride } from '../models/ride';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RideService {

private getUrl : string = "http://localhost:9090/Ride/getRides"

private postUrl : string = "http://localhost:9090/Ride/saveRides"

private getUserRidesUrl : string = "http://localhost:9090/Ride/getRideByUserId"

private getDriverRidesUrl : string = "http://localhost:9090/Ride/getRideByDriverId"

private cancelRideUrl : string = "http://localhost:9090/Ride/updateRides"

  constructor(private _httpClient: HttpClient) { }

  getRides() : Observable<Ride[]> {
    return this._httpClient.get<Ride[]>(this.getUrl).pipe(
    map( response => response)
      )
  }

  saveRides(ride : Ride) : Observable<Ride>{
    return this._httpClient.post<Ride>(this.postUrl,ride);
  }

  getUserRides(ride : Ride) : Observable<any>{
    return this._httpClient.post<any>(this.getUserRidesUrl,ride);
  }

  cancelRide(ride : Ride) : Observable<any>{
    return this._httpClient.put<any>(this.cancelRideUrl,ride);
  }

  getDriverRides(ride : Ride) : Observable<any>{
    return this._httpClient.post<any>(this.getDriverRidesUrl,ride);
  }
  
}
