import {Component, OnInit, SimpleChanges, Input} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Commentarz} from "../../models/comment";
import {Post} from "../../models/post";
import {CommonService} from "../../services/common.service";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  constructor(private api:HttpService,private common:CommonService) { }

  id:string = this.common.id

  commentsVisible:boolean = false

  data:Post

  model:Partial<Commentarz>={votes:0}

  changeComments(){
    this.commentsVisible = ! this.commentsVisible;
  }

  addComment(){
    this.api.postComments(this.id,this.model as Commentarz).subscribe()
  }

  ngOnInit(): void {
    if(this.id) {
      this.api.getPost(this.id).subscribe(response => {
        this.data = response.data[0]
      })
      this.api.getComments(this.id).subscribe(response => {
        this.data.comments = response.data
      })
    }
  }
}



