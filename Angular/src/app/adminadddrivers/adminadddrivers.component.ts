import { Component, OnInit } from '@angular/core';
import { DriverRequestService } from '../servicess/driver-request.service';
import { DriverRequest } from '../models/driver-request';
import { DriverService } from '../servicess/driver.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-adminadddrivers',
  templateUrl: './adminadddrivers.component.html',
  styleUrls: ['../admincss/admin.css']
})
export class AdminadddriversComponent implements OnInit {
  [x: string]: any;

  driverRequests : DriverRequest[] = [];

  constructor(private _driverRequestService: DriverRequestService,
                     private  _driverService: DriverService,
                     private snackBar: MatSnackBar) { }


  ngOnInit(): void {
    this.listDriverRequests();
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  addDriverRequests(data,id:number){
    console.log(data);
    data.status = "Active";
    this._driverService.saveDrivers(data).subscribe(
      data =>{
        console.log(data);
        this.deleteDriverRequestNoSnackBar(id);
        this.listDriverRequests();
        this.openSnackBar("Driver Added Sucessfully","");
      }
    )
  }

  deleteDriverRequestNoSnackBar(id: number) {
    this._driverRequestService.deleteDriverRequests(id)
      .subscribe(
        data => {
          console.log(data);
          this.listDriverRequests();
          }
      )
  }

  deleteDriverRequests(id: number) {
    this._driverRequestService.deleteDriverRequests(id)
      .subscribe(
        data => {
          console.log(data);
          this.listDriverRequests();
          this.openSnackBar("Driver Deleted Sucessfully","");
          }
      )
  }

  listDriverRequests(){
  this._driverRequestService.getDriverRequests().subscribe(
    data => this.driverRequests=data
    )
  }
}
