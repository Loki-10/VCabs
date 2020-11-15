import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog'; 
import { DialogComponent } from  '../dialog/dialog.component';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  openDialog(){
    this.dialog.open(DialogComponent);
  }


  ngOnInit(): void {
  }

}
