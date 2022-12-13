import {Commentarz} from "./comment";

export interface Post {
  _id:string,
  title:string,
  author:string,
  text:string,
  date?:Date|null
  votes:number
  comments:Commentarz[]
}
