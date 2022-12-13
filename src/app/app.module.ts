import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

import { PostComponent } from './posts/post/post.component';

@NgModule({
  declarations: [
    AppComponent,

    PostComponent
  ],
    imports: [
        BrowserModule, HttpClientModule, FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
