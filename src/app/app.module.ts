import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainlandingComponent } from './mainlanding/mainlanding.component';
import { HeadoneComponent } from './headone/headone.component';
import { HeadtwoComponent } from './headtwo/headtwo.component';

@NgModule({
  declarations: [
    AppComponent,
    MainlandingComponent,
    HeadoneComponent,
    HeadtwoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
