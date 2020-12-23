import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs/internal/operators/take';
import { Post } from '../models/post.model';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit {

  post: Post;
  constructor(
    private activatedRoute: ActivatedRoute,
    private restService: RestService,
    private router: Router
  ) { }

  private isPostValid = (post: Post) => (post.title.length > 0 && post.body.length > 0);
  
  ngOnInit(): void {
    this.activatedRoute.params.pipe(take(1)).subscribe(param => {
      const servicePost = this.restService.post;
      if (servicePost !== null && this.isPostValid(servicePost)) {
          this.post = {...this.restService.post};  
      } else if (servicePost === null) {
        this.restService.getPostById(parseInt(param.id)).subscribe((post: Post) => {
          if (this.isPostValid(post)) {
            this.post = {...post};  
          } else {
            this.goToMain();
          }
        }, () => {
          this.goToMain();
        });
      } else {
        this.goToMain();
      }
    });
  }
  
  goToMain() {
    this.router.navigateByUrl('/posts');
  }

}
