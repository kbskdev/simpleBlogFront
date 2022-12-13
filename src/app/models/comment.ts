export interface Commentarz {
  id?:string,
  author:string,
  text:string,
  date?:Date|null
  votes?:number
}
