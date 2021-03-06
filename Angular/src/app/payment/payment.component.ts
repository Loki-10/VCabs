import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfirmService } from '../servicess/confirm.service';
import { DriverService } from '../servicess/driver.service';
import { RideService } from '../servicess/ride.service';
import { InteractionService } from '../servicess/interaction.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  sendUserRides:any;
  userDetails : any;

  constructor(
              private _rideService: RideService,
              private snackBar: MatSnackBar,
              private interactionService : InteractionService,
              private confirmService : ConfirmService,
              private _driverService: DriverService) { }

  
    openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  makeData(data){
    this._driverService.getDriver(data).subscribe(
      driverData => 
      {
        data.driverId=driverData[0].driverId;
        data.driverName=driverData[0].driverName;
        data.driverPhone = driverData[0].phone;
        data.driverEmail = driverData[0].email;
        data.userId = this.userDetails.userId;
        data.userName = this.userDetails.userName;
        data.userPhone = this.userDetails.phone;
        data.userEmail = this.userDetails.email;
        data.amount = 560;
        data.cancel = "No";
        console.log(data);
        this.saveRides(data);
        driverData[0].status="Booked"
        this.updateDriverStatus(driverData[0]);
           }
      )
  }
  updateDriverStatus(data){
    this._driverService.updateDriverStatus(data).subscribe(
      data=>{
        console.log(data)
      }
    )
  }

  saveRides(data){
    this._rideService.saveRides(data).subscribe(
      data =>{
        this.openSnackBar("Booking Successfull","");
      }
    )
  }

  confirmBooking(){
      this.makeData(this.sendUserRides);
  }
  
  ngOnInit(): void {
    this.confirmService.currentMessage.subscribe(message => (this.sendUserRides= message)); 
    this.interactionService.currentMessage.subscribe(message => (this.userDetails= message)); 
  }

}
