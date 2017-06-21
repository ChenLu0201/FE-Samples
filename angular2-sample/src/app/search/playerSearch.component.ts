import { Component } from "@angular/core";
import { Player } from "./player";
import { PlayerService } from "./playerService";

@Component({
  selector: 'my-app',
  template: `<h3>{{title}}</h3>
             <input [(ngModel)]="playerName" placeholder="name"/>&nbsp;<button (click)="searchPlayer(playerName)">Search</button>
             <ul class="players">
               <li *ngFor="let player of players" style="font-size:18px" (click)="selectPlayer(player)">
                 <span class="badge">{{player.num}}</span> <span>{{player.name}} | {{player.age}}</span>
               </li>
             </ul>
             <player-detail [player]="selectedPlayer"></player-detail>`,
  styles: [`
    .selected {
      background-color: #CFD8DC !important;
      color: white;
    }
    .players {
      margin: 0 0 2em 0;
      list-style-type: none;
      padding: 0;
      width: 15em;
    }
    .players li {
      cursor: pointer;
      position: relative;
      left: 0;
      background-color: #EEE;
      margin: .5em;
      padding: .3em 0;
      height: 1.6em;
      border-radius: 4px;
    }
    .players li.selected:hover {
      background-color: #BBD8DC !important;
      color: white;
    }
    .players li:hover {
      color: #607D8B;
      background-color: #DDD;
      left: .1em;
    }
    .heroes .text {
      position: relative;
      top: -3px;
    }
    .players .badge {
      display: inline-block;
      font-size: small;
      color: white;
      padding: 0.8em 0.7em 0 0.7em;
      background-color: #607D8B;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -4px;
      height: 1.8em;
      width: 1.3em;
      margin-right: .8em;
      border-radius: 4px 0 0 4px;
    }
  `]
})

export class AppComponent  {
  constructor(private playerService: PlayerService) { }

  title = 'Golden State Warriors';
  allPlayers = this.playerService.getPlayers();
  players = this.allPlayers;
  selectedPlayer: Player;
  searchPlayer(name: string): void {
    this.players = this.allPlayers.filter((player) => {return player.name.toLowerCase().includes(name.toLowerCase())})
  };
  selectPlayer(player: Player): void {
    this.selectedPlayer = player;
  }

}

