import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsComponent } from './post-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [PostDetailsComponent],
  imports: [
    CommonModule,
    PostDetailsRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class PostDetailsModule { }
