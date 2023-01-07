import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import { Commentarz} from "../models/comment";
import {CommentsApiResponse} from "../models/comments-api-response";
import {PostsApiResponse} from "../models/posts-api-response";
import {HttpParams} from "@angular/common/http";
import {Post} from "../models/post";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) {
  }

  getComments(id:string):Observable<CommentsApiResponse>{
    return this.http.get<CommentsApiResponse>(`http://localhost:8000/api/v1/posts/comments/${id}`)
  }

  postComments(id:string,comment:Commentarz):Observable<Commentarz>{
    return this.http.post<Commentarz>(`http://localhost:8000/api/v1/posts/comments/${id}`,comment)
  }

  getPost(id:string):Observable<PostsApiResponse>{
    return this.http.get<PostsApiResponse>(`http://localhost:8000/api/v1/posts/${id}`)
  }

  getAllPosts():Observable<PostsApiResponse>{
    return this.http.get<PostsApiResponse>(`http://localhost:8000/api/v1/posts/`)
  }

  addPost(post:Post):Observable<PostsApiResponse>{
    return this.http.post<PostsApiResponse>(`http://localhost:8000/api/v1/posts/`,post)
  }

  getPostIcon():Observable<PostsApiResponse>{
    return this.http.get<PostsApiResponse>(`http://localhost:8000/api/v1/posts/icons/`)
  }

  getLazyPost(amount:number):Observable<PostsApiResponse>{
    return this.http.get<PostsApiResponse>(`http://localhost:8000/api/v1/posts/lazyload/${amount}`)
  }
}
