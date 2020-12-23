import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  postForm: FormGroup;
  errorText: string;
  
  constructor(
    private _router: Router,
    public restService: RestService
  ){}
  
  ngOnInit(): void {
    this.postForm = new FormGroup({
      postId: new FormControl(this.restService.post !== null ? this.restService.post.id : '')
    });
  }
  
  getPost() {
    const id = this.postForm.get('postId').value;
    this.restService.getPostById(id).subscribe(post => {
      if (post.title.length > 0 && post.body.length > 0) {
        this.restService.post = post;
        this._router.navigateByUrl(`/posts/${id}`);
      } else {
        this.errorText = 'Invalid Post: title or body empty';
      }
    }, err => {
      this.errorText = err.error.message;
    });    
  }

}
