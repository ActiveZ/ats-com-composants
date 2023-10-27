import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantSimpleComponent } from './components/enfant-simple/enfant-simple.component';
import { EnfantCounterComponent } from './components/enfant-counter/enfant-counter.component';
import { IngredientCounterComponent } from './components/ingredient-counter/ingredient-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantSimpleComponent,
    EnfantCounterComponent,
    IngredientCounterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
