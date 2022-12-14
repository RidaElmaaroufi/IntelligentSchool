import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get('http://localhost:8080/users',
    {headers: new HttpHeaders().set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
  getUserById(id: string){
    return this.http.get('http://localhost:8080/users/'+id,
    {headers: new HttpHeaders().set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
  postUser(id:string,Name: string, Domain: string){
    return this.http.post('http://localhost:8080/user',
    {headers: new HttpHeaders().set('accept', '*/*').set('content-type', 'application/json').set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
  deleteUser(id:string) {
    return this.http.delete('http://localhost:8080/users'+ id,
    {headers: new HttpHeaders().set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
  putUser(id:string) {
    return this.http.put('http://localhost:8080/users'+ id,
    {headers: new HttpHeaders().set('Authorization', 'Api-Key k6DQZf68W4dbuf')});
  }
}
