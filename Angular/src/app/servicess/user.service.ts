import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private getUrl : string = "http://localhost:9090/User/getUsers"

private postUrl : string = "http://localhost:9090/User/saveUsers"

private checkUrl : string = "http://localhost:9090/User/getUserByEmail"

  constructor(private _httpClient: HttpClient) { }

  getUsers() : Observable<User[]> {
    return this._httpClient.get<User[]>(this.getUrl).pipe(
    map( response => response)
      )
  }

  checkUser(user : User) : Observable<any>{
    return this._httpClient.post<any>(this.checkUrl,user);
  }

  saveUsers(user : User) : Observable<User>{
    return this._httpClient.post<User>(this.postUrl,user);
  }
}
