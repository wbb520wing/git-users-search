import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FollowingComponent } from './following/following.component';
import { UserComponent } from './user/user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FollowingComponent,
    UserComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
