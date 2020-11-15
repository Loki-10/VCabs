import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from  '../dialog/dialog.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogComponent);
  }

  ngOnInit(): void {
  }

}
