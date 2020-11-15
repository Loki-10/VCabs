import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from  '../dialog/dialog.component';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogComponent);
  }


  ngOnInit(): void {
  }

}
