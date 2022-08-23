import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
@Input() username ='';
@Input() followers = 0;
@Input() image = '';

  constructor() { }

  ngOnInit(): void {
  }

}
