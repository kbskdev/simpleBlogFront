import { Component,OnInit } from '@angular/core';
import {Commentarz} from "./models/comment";
import {HttpService} from "./services/http.service";
import {NgForm} from "@angular/forms";
import {Post} from "./models/post";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'simpleBlogFront';

  constructor(private api:HttpService) {
  }

  posts:Post[]


  ngOnInit() {
    this.api.getAllPosts().subscribe(data=>{
      this.posts=data.data
    })
  }

}
