"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var playerService_1 = require("./playerService");
var AppComponent = (function () {
    function AppComponent(playerService) {
        this.playerService = playerService;
        this.title = 'Golden State Warriors';
        this.allPlayers = this.playerService.getPlayers();
        this.players = this.allPlayers;
    }
    AppComponent.prototype.searchPlayer = function (name) {
        this.players = this.allPlayers.filter(function (player) { return player.name.toLowerCase().includes(name.toLowerCase()); });
    };
    ;
    AppComponent.prototype.selectPlayer = function (player) {
        this.selectedPlayer = player;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "<h3>{{title}}</h3>\n             <input [(ngModel)]=\"playerName\" placeholder=\"name\"/>&nbsp;<button (click)=\"searchPlayer(playerName)\">Search</button>\n             <ul class=\"players\">\n               <li *ngFor=\"let player of players\" style=\"font-size:18px\" (click)=\"selectPlayer(player)\">\n                 <span class=\"badge\">{{player.num}}</span> <span>{{player.name}} | {{player.age}}</span>\n               </li>\n             </ul>\n             <player-detail [player]=\"selectedPlayer\"></player-detail>",
        styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .players {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .players li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .players li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .players li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .heroes .text {\n      position: relative;\n      top: -3px;\n    }\n    .players .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      width: 1.3em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [playerService_1.PlayerService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=playerSearch.component.js.map