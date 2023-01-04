import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {PostsIconsContainerComponent} from "../posts/posts-icons-container/posts-icons-container.component";
import {PostComponent} from "../posts/post/post.component";
import {AppComponent} from "../app.component";
import {AddPostsComponent} from "../posts/add-posts/add-posts.component";


const routes: Routes = [
  {path:"postsIconsContainer",component:PostsIconsContainerComponent

    },
  {path:"post",component:PostComponent},
  {path:"addPost",component:AddPostsComponent},
  {path:"main",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
