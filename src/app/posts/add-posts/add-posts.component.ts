import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Post} from "../../models/post";

@Component({
  selector: 'app-add-posts',
  templateUrl: './add-posts.component.html',
  styleUrls: ['./add-posts.component.css']
})
export class AddPostsComponent implements OnInit {

  constructor(private api:HttpService) { }

  model:Partial<Post> = {}

  addPost(){
    this.api.addPost(this.model as Post).subscribe()
    console.log("wyslane")
  }

  ngOnInit(): void {
  }

}
