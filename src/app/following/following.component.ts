import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

followers: any = [];
followersEntireList: any = []


  constructor(private api: ApiService) { }

  ngOnInit(): void {
      this.api.$user.pipe(
        map((value: any) => value.username),
        switchMap((data: string) => this.api.getFollowing(data)),
        map((follower: any) => {
          const arr = follower.map((el: any) => {
            return {
              id: el.id,
              username:el.login,
              image: el.avatar_url
            }
          })
          return arr
        }),
        tap((name: any) => {
          this.followersEntireList = [...name];
          this.followers = this.followersEntireList.slice(0,10)
        })
      ).subscribe((v:any) => {
        console.log(v)
      })

  }

  loadMore(){
    if(this.followersEntireList.length > 10){
      this.followers = this.followers.concat(this.followersEntireList.slice(10))
      this.followersEntireList.splice(0,10)
    } else {
      alert('There is no more followers!')
    }
  }

}
