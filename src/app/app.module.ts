import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EnfantSimpleComponent } from './components/enfant-simple/enfant-simple.component';
import { EnfantCounterComponent } from './components/enfant-counter/enfant-counter.component';
import { drinkCounterComponent } from './components/drink-counter/drink-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    EnfantSimpleComponent,
    EnfantCounterComponent,
    drinkCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
