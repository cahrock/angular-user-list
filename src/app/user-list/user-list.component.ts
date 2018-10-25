import { Component, OnInit } from '@angular/core';
import { User } from 'app/models/user';
import { UserService } from './user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: User[];
  title = "List of Users"

  constructor(private userService: UserService) { }

  getUsers(): void {
    this.userService.getUsers()
    .then(users => this.users = users);
  }
  ngOnInit() {
    this.getUsers();
  }

}
