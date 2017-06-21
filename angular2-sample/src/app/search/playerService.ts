import { Injectable } from '@angular/core';
import { Player } from './player';

const PLAYERS: Player[] = [
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

@Injectable()
export class PlayerService {
  getPlayers(): Player[] {
    return PLAYERS;
  }
}
