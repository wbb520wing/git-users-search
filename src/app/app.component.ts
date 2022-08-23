import { Component, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';


import { filter, map, switchMap } from 'rxjs/operators';
import { HomeComponent } from './home/home.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
