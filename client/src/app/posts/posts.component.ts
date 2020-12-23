import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  
  postForm: FormGroup;
  postId: number;
  
  constructor(private router: Router){}
  
  ngOnInit(): void {
    this.postForm = new FormGroup({
      postId: new FormControl()
    });
  }
  
  getPost() {
    console.log(this.postForm.get('postId').value);
    this.router.navigateByUrl(`/posts/${this.postForm.get('postId').value}`);
  }

}
