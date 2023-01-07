import {Component, HostListener, OnInit} from '@angular/core';
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

  skipped:number = 0
  goToPost(id:string){
    localStorage.setItem('lastPost',id)
    console.log(localStorage.getItem('lastPost')+"post icon container")
    this.router.navigateByUrl("post")
  }

  @HostListener('window:scroll', ['$event'])
  loadNewPost(event:Event){

    if(document.body.scrollHeight - window.innerHeight - window.scrollY<-10){
      this.api.getLazyPost(this.skipped).subscribe(resData=>{
        resData.data.forEach(value=>{this.posts.push(value)})
        this.skipped+=6
        console.log(this.skipped)
      })

    }
  }


  ngOnInit() {
    this.api.getLazyPost(this.skipped).subscribe(data=>{
      this.posts=data.data
      this.skipped+=6
    })
  }


}
