import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { User } from 'app/models/user';
import 'rxjs/add/operator/switchMap';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  userDetail(): void {
    this.route.params
    .switchMap((params: Params) => this.userService.getDetail(+params['id']))
    .subscribe(user => this.user = user)
  }
 
  ngOnInit() {
    this.userDetail();
  }

  onEditUser(): void {
    this.route.params
    .switchMap((params: Params) => this.userService.getDetail(+params['id']))
    .subscribe(user => this.user = user)
    // this.router.navigate([':id'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
