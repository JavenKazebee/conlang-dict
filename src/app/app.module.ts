import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WordDetailComponent } from './word-detail.component';
import { WordListComponent } from './word-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    WordDetailComponent,
    WordListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
