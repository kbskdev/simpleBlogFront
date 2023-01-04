import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {PostIcon} from "../../models/post-icon";
import {Router} from "@angular/router";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-posts-icons-container',
  templateUrl: './posts-icons-container.component.html',
  styleUrls: ['./posts-icons-container.component.css']
})
export class PostsIconsContainerComponent implements OnInit {

  constructor(private api:HttpService,private common:CommonService,private router:Router) {
  }

  posts:PostIcon[];

  goToPost(id:string){

    this.common.id = id
    this.router.navigateByUrl("post")
  }



  ngOnInit() {
    this.api.getPostIcon().subscribe(data=>{
      this.posts=data.data
    })
  }


}
