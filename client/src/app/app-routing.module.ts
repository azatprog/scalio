import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { 
    path: 'posts', 
    loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) 
  },
  { 
    path: 'posts/:id', 
    loadChildren: () => import('./post-details/post-details.module').then(m => m.PostDetailsModule) 
  },
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
