import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private baseUrl = 'https://api.github.com/users';
$user = new BehaviorSubject({});


  constructor(private http: HttpClient) { }


  getUser(name: string){
    const header = new HttpHeaders().set('Accept','application/vnd.github+json')
    return this.http.get([this.baseUrl, name].join('/'), {'headers': header})
  }


  getFollowing(name: string){
    return this.http.get([this.baseUrl, name, 'followers'].join('/'))
  }

}
