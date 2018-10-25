import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from 'app/models/user';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../user.service';




@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  title = "Edit User Profile";
  user: User; 

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  userDetail(): void {
    this.route.params
    .switchMap((params: Params) => this.userService.getDetail(+params['id']))
    .subscribe(user => this.user = user)
  }
 
  ngOnInit() {
    this.userDetail();
  }

  onSubmit(): void {
    this.userService.update(this.user)
    .then(() => this.goBack())
  }

  goBack(): void {
    this.location.back();
  }
}
