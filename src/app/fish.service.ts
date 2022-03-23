import { Injectable } from '@angular/core';
import { Tank } from './model/tank.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  tank : Tank = new Tank();

  constructor() { }
}
