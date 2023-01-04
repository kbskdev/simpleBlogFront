import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { PostComponent } from './posts/post/post.component';
import { PostIconComponent } from './posts/post-icon/post-icon.component';
import { PostsIconsContainerComponent } from './posts/posts-icons-container/posts-icons-container.component';
import { AddPostsComponent } from './posts/add-posts/add-posts.component';
import { RoutingModule} from "./routing/routing.module";

@NgModule({
  declarations: [
    AppComponent,

    PostComponent,
      PostIconComponent,
      PostsIconsContainerComponent,
      AddPostsComponent
  ],
    imports: [
        BrowserModule, HttpClientModule, FormsModule,RoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
