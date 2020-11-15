import { Component, OnInit } from '@angular/core';
import { UserService } from '../servicess/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['../admincss/admin.css']
})
export class AdminusersComponent implements OnInit {

  users : User[] = [];

  constructor(private _userService: UserService) { }

  ngOnInit(): void {
    this._userService.getUsers().subscribe(
      data => this.users=data
    )
  }

}
