import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DrumKitComponent } from './drum-kit/drum-kit.component';

@NgModule({
  declarations: [
    AppComponent,
    DrumKitComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
