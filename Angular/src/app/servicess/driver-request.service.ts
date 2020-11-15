import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DriverRequest } from '../models/driver-request';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'  
})
export class DriverRequestService {

  private getUrl : string = "http://localhost:9090/DriverRequest/getDriverRequests"

  private postUrl : string = "http://localhost:9090/DriverRequest/saveDriverRequests"

  private deleteUrl : string = "http://localhost:9090/DriverRequest/deleteDriverRequests/"

  
    constructor(private _httpClient: HttpClient) { }
  
    getDriverRequests() : Observable<DriverRequest[]> {
      return this._httpClient.get<DriverRequest[]>(this.getUrl).pipe(
      map( response => response)
        )
    }
    
    deleteDriverRequests(id : number) : Observable<any>{
      console.log(id);
      return this._httpClient.delete(`${this.deleteUrl}${id}`,{responseType:'text'});
    }

    saveDriverRequests(driverRequest : DriverRequest) : Observable<DriverRequest>{
      return this._httpClient.post<DriverRequest>(this.postUrl,driverRequest);
    }
  }
  