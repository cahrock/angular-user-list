import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { InMemoryDb } from './user-list/in-memory-db.service';
import { UserDetailComponent } from './user-list/user-detail/user-detail.component';
import { UserEditComponent } from './user-list/user-edit/user-edit.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './user-list/user.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserListComponent,
    UserEditComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDb),
    AppRoutingModule
  ],
  providers: [ UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
