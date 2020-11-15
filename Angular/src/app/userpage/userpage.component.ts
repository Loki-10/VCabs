import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { CancelridesComponent } from  '../cancelrides/cancelrides.component';
import { RideService } from '../servicess/ride.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { InteractionService } from '../servicess/interaction.service';
import { Ride } from '../models/ride';
import { NoridesComponent } from '../norides/norides.component';
import { PaymentComponent } from '../payment/payment.component';
import { ConfirmComponent } from '../confirm/confirm.component';
import { ConfirmService } from '../servicess/confirm.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-userpage',
  templateUrl: './userpage.component.html',
  styleUrls: ['./userpage.component.css']
})
export class UserpageComponent implements OnInit {
  
  userDetails:any;

  subscription: Subscription;

  rides : Ride[] = [];
  
  constructor(public dialog: MatDialog,
    private _rideService: RideService,
              private snackBar: MatSnackBar,
              private confirmService : ConfirmService,
              private interactionService: InteractionService) { }
              
  openDialog(){
    this.getUserRides();
    let c=0, len =  this.rides.length;
    for (let i = 0;i< len;i++){
          if(this.rides[i].cancel=="Yes"){
            c++;
          }
    }
    if(c!=len){
      this.dialog.open(CancelridesComponent);
    }
    else{
      this.dialog.open(NoridesComponent);
    }
  }
  
  openConfirmDialog(data){
    this.confirmService.changeMessage(data);
    if(data.payment=="Online"){
      this.dialog.open(PaymentComponent);
    }
    else{
      this.dialog.open(ConfirmComponent);
    }
  }

  getUserRides(){
    this.interactionService.currentMessage.subscribe(message => (this.userDetails= message)); 
    this._rideService.getUserRides(this.userDetails).subscribe(
      data => this.rides=data 
    ) 
}

  ngOnInit(): void {
    this.interactionService.currentMessage.subscribe(message => (this.userDetails= message)); 
    this.getUserRides();
  }
}
