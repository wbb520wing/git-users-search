import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { filter,switchMap,distinctUntilChanged, debounceTime, startWith, map  } from 'rxjs/operators';

import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('searchName', { static: true }) searchName!: ElementRef;

  currentUser: any;
  errMsg = '';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
   this.getSearchName()
      .pipe(
        filter((value: string) => value !== ''),
        switchMap((name: string) => this.api.getUser(name)),
        map((user: any) => {
          return {
            id: user.id,
            username: user.login,
            followers: +user.followers,
            image: user.avatar_url,
          };
        })
      )
      .subscribe(
        (value) => {
          this.currentUser = value;
          this.api.$user.next(this.currentUser)
          console.log(value);
        },
        (err) => {
          this.errMsg = err.error.message;
          alert(this.errMsg)
          location.reload()
        }
      );

  }

  getSearchName() {
    return fromEvent(this.searchName.nativeElement, 'keyup').pipe(
      map((e: any) => e.target.value),
      startWith(''),
      debounceTime(1000),
      distinctUntilChanged()
    );
  }



}
