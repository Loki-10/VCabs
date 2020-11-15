import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from  '../dialog/dialog.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogComponent);
  }


  ngOnInit(): void {
  }

}
