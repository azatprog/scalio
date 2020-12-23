import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_URL } from '../models/constants.model';
import { Post } from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  private _post: Post = null;
  
  constructor(public http: HttpClient) { }
  
  getPostById(id: number): Observable<Post> {
    return this.http.get<Post>(`${BASE_URL}/posts/${id}`);
  }
  
  get post() {
    return this._post;
  }
  
  set post(p: Post) {
    this._post = {...p};
  }
}
