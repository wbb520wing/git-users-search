import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

searchUser: any;

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.api.$user.subscribe((user: any) => {
      this.searchUser = user
    })
  }


}
