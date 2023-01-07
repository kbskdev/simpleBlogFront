import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  id:string = localStorage.getItem('lastPost')!

  constructor() { }
}
