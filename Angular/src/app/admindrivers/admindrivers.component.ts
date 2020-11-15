import { Component, OnInit } from '@angular/core';
import { DriverService } from '../servicess/driver.service';
import { Driver } from '../models/driver';

@Component({
  selector: 'app-admindrivers',
  templateUrl: './admindrivers.component.html',
  styleUrls: ['../admincss/admin.css']
})
export class AdmindriversComponent implements OnInit {

  drivers : Driver[] = [];

  constructor(private _driverService: DriverService) { }

  ngOnInit(): void {
    this._driverService.getDrivers().subscribe(
      data => this.drivers=data
    )
  }
}
