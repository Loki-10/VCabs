import { Component, OnInit } from '@angular/core';
import { DriverRequest } from '../models/driver-request';
import { DriverRequestService } from '../servicess/driver-request.service';
import { DriverService } from '../servicess/driver.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { DriverLoginService } from '../servicess/driver-login.service';

@Component({
  selector: 'app-driverlogin',
  templateUrl: './driverlogin.component.html',
  styleUrls: ['./driverlogin.component.css']
})
export class DriverloginComponent {

  driverRequest : DriverRequest = new DriverRequest();

  constructor(private _driverRequestService: DriverRequestService,
              private _driverService: DriverService,  
              private _driverLogin : DriverLoginService, 
              private _router: Router,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<DriverloginComponent>) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  saveDriverRequests(data){ 
    this._driverRequestService.saveDriverRequests(data).subscribe(
      data =>{
        console.log(data);
        this.dialogRef.close();
        this.openSnackBar("Submitted Successfully, we will get you by Email","");
        this._router.navigateByUrl("/Home");
      }
    )
  }

  checkDriver(data){
    this._driverService.checkDriver(data).subscribe(
      d=>{
          if(d==null)
          {
            this.openSnackBar("Invalid Gmail","");
          }
          else if(data.password!=d.password)
          {
            this.openSnackBar("Invalid Password","");
          }
          else
          {
            this.dialogRef.close();
            this._driverLogin.changeMessage(d);
            this.openSnackBar("Login Successfull","");
            this._router.navigateByUrl("/DriverPage");
          }
      }
    )
    }
  ngOnInit(): void {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
    });
    }
}


