import {Component, Input, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {PostIcon} from "../../models/post-icon";

@Component({
  selector: 'app-post-icon',
  templateUrl: './post-icon.component.html',
  styleUrls: ['./post-icon.component.css']
})
export class PostIconComponent implements OnInit {

  constructor(private api:HttpService) { }

  @Input()
  data:PostIcon


  ngOnInit(): void {
    this.api.getPostIcon().subscribe(response=>{

    })
  }

}
