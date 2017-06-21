"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PLAYERS = [
    { id: 11, name: 'Stephen Curry', num: 30, age: 29 },
    { id: 12, name: 'Kevin Durant', num: 35, age: 28 },
    { id: 13, name: 'Draymond Green', num: 23, age: 27 },
    { id: 14, name: 'Klay Thompson', num: 11, age: 27 },
    { id: 15, name: 'Andre Iguodala', num: 9, age: 33 },
    { id: 16, name: 'David West', num: 3, age: 36 },
    { id: 17, name: 'Zaza Pachulia', num: 27, age: 33 },
    { id: 18, name: 'Shaun Livingston', num: 34, age: 34 },
    { id: 19, name: 'David West', num: 3, age: 36 },
    { id: 20, name: 'Anderson Varejao', num: 18, age: 34 },
    { id: 20, name: 'Javale McGee', num: 1, age: 29 },
];
var PlayerService = (function () {
    function PlayerService() {
    }
    PlayerService.prototype.getPlayers = function () {
        return PLAYERS;
    };
    return PlayerService;
}());
PlayerService = __decorate([
    core_1.Injectable()
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=playerService.js.map