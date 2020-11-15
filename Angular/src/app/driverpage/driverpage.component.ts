import { Component, OnInit } from '@angular/core';
import { RideService } from '../servicess/ride.service';
import { Ride } from '../models/ride';
import { DriverLoginService } from '../servicess/driver-login.service';


@Component({
  selector: 'app-driverpage',
  templateUrl: './driverpage.component.html',
  styleUrls: ['../admincss/admin.css']
})
export class DriverpageComponent implements OnInit {
    driverDetails : any;
    rides : Ride[] = [];

  constructor(private _rideService: RideService,
    private _driverLogin : DriverLoginService) { }

  getDriverRides(){
    this._driverLogin.currentMessage.subscribe(message => (this.driverDetails= message)); 
    this._rideService.getDriverRides(this.driverDetails).subscribe(
      data => this.rides=data 
    ) 
}

  ngOnInit(): void {
    this._driverLogin.currentMessage.subscribe(message => (this.driverDetails= message)); 
    this.getDriverRides();
  }
}