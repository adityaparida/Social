import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'http://localhost:3000/posts/';

  sendPosts(data: any) {
    return this.http.post<any>(this.baseUrl, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  showPosts() {
    return this.http.get<any>(this.baseUrl)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  showPost(id: number) {
    return this.http.get<any>(this.baseUrl+id)
    .pipe(map((res: any) => {
      return res;
    }))
  }
}
