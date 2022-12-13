import {Component, OnInit, SimpleChanges, Input} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {Commentarz} from "../../models/comment";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit{

  constructor(private api:HttpService) { }

  @Input()
  id:string

  comments:Commentarz[]

  model:Partial<Commentarz>={votes:0}


  addComment(){
    this.api.postComments(this.id,this.model as Commentarz).subscribe()
  }

  ngOnInit(): void {
    this.api.getComments(this.id).subscribe(data=>{
      this.comments=data.data
    })
  }
}



