import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './component/component.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { ContentsComponent } from './component/contents/contents.component';
import { DreamComponent } from './component/dream/dream.component';


@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    NavbarComponent,
    ContentsComponent,
    DreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
