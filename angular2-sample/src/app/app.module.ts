import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './search/playerSearch.component';
import { PlayerDetailComponent } from './search/player-detail.component';
import { PlayerService } from './search/playerService';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PlayerDetailComponent ],
  bootstrap:    [ AppComponent ],
  providers: [ PlayerService ]
})
export class AppModule { }
