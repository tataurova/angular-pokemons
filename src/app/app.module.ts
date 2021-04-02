import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { PokemonItemComponent } from './components/pokemon-item/pokemon-item.component';
import { RedBorderDirective } from './directives/red-border.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PokemonItemComponent,
    RedBorderDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
