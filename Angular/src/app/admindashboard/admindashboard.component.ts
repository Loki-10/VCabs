import { Component, OnInit } from '@angular/core';
import { RideService } from '../servicess/ride.service';
import { Ride } from '../models/ride';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['../admincss/admin.css']
})

export class AdmindashboardComponent implements OnInit {

  rides : Ride[] = [];

  constructor(private _rideService: RideService) { }

  ngOnInit(): void {
    this._rideService.getRides().subscribe(
      data => this.rides=data
    )
  }
}
