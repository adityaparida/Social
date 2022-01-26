import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/profile/';

  createUser(data: any){
    return this.http.post<any>(this.baseUrl, data)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  getUser(id: number){
    return this.http.get<any>(this.baseUrl)
    .pipe(map((res:any) => {
      return res;
    }))
  }

  updateUser(data: any, id: number){
    return this.http.put<any>(this.baseUrl+id, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteUser(id: number){
    return this.http.delete<any>(this.baseUrl+id)
    .pipe(map((res: any) => {
      return res;
    }))
  }
}
