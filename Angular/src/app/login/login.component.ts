import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../servicess/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef } from '@angular/material/dialog';
import { InteractionService } from '../servicess/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  user : User = new User();

  constructor(private _userService: UserService,
              private _router: Router,
              private snackBar: MatSnackBar,
              public dialogRef: MatDialogRef<LoginComponent>,
              private interactionService: InteractionService) { }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
        
  
  saveUsers(data){
    console.log(data);
    this._userService.saveUsers(data).subscribe(
      data =>{
        console.log('response',data);
        this.dialogRef.close();
        this.openSnackBar("SignUp Successfull","");
        this._router.navigateByUrl("/Home");
      }
    )
  }
  checkUser(data){
    if(data.userEmail=="admin@vcabs.com" && data.userPassword=="adminvcabs"){
      this.dialogRef.close();
      this._router.navigateByUrl("/AdminDashboard");
    }
    else{
    this._userService.checkUser(data).subscribe(
      userDetails=>{
          if(userDetails==null)
          {
            this.openSnackBar("Invalid Gmail","");
          }
          else
          {
            this.dialogRef.close();
            this.interactionService.changeMessage(userDetails);
            this.openSnackBar("Login Successfull","");
            this._router.navigateByUrl("/UserPage");
          }
      }
    )
    }
  }
  ngOnInit(): void {

    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');
    
    signInButton.addEventListener('click', () => {
      container.classList.remove("right-panel-active");
    });

    signUpButton.addEventListener('click', () => {
      container.classList.add("right-panel-active");
    });
    
  }

}
