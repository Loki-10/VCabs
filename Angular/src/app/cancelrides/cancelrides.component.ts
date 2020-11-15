import { Component, OnInit } from '@angular/core';
import { RideService } from '../servicess/ride.service';
import { InteractionService } from '../servicess/interaction.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Ride } from '../models/ride';
import { DriverService } from '../servicess/driver.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cancelrides',
  templateUrl: './cancelrides.component.html',
  styleUrls: ['../admincss/admin.css']
})
export class CancelridesComponent implements OnInit {

    userDetails : any;
    rides : Ride[] = [];
  

  constructor(private _rideService: RideService,
    private snackBar: MatSnackBar,
    private interactionService: InteractionService,
    private _driverService: DriverService,
    private _router:Router) { }

    openSnackBar(message: string, action: string) {
      this.snackBar.open(message, action, {
        duration: 2000,
      });
    }

    updateRide(data){
      this.cancelRide(data);
      this.updateDriverStatus(data)
      this.openSnackBar("Ride Cancelled Successfully","")
    }

      cancelRide(data) {
      data.cancel="Yes"; 
      this._rideService.cancelRide(data).subscribe(
          data => {
            this.getUserRides();
            }
        )
    }

    updateDriverStatus(data){
      this._driverService.updateDriverById(data).subscribe(
        data=>{
          console.log(data)
        }
      )
    }

    getUserRides(){
        this.interactionService.currentMessage.subscribe(message => (this.userDetails= message)); 
        this._rideService.getUserRides(this.userDetails).subscribe(
          data => this.rides=data 
        ) 
    }

  ngOnInit(): void {
    this.getUserRides();
  }
}