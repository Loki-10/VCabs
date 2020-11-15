import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { LoginComponent } from '../login/login.component';
import { DriverloginComponent } from '../driverlogin/driverlogin.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  openDriverLogin(){
    this.dialog.open(DriverloginComponent);
  }

  openUserLogin(){
    this.dialog.open(LoginComponent);
  }
 
  ngOnInit(): void {
  }

}
