import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'users',  component: UserListComponent, children: [
      { path: 'detail/:id',  component: UserDetailComponent }
  ] },
  { path: 'users/edit/:id',  component: UserEditComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
