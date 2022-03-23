import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishService } from 'src/app/fish.service';
import { Tank } from 'src/app/model/tank.model';

@Component({
  selector: 'app-dimentions',
  templateUrl: './dimentions.component.html'
})
export class DimentionsComponent implements OnInit {

  tank = new Tank()

  constructor(private router: Router,
              private service: FishService) { }
  
  ngOnInit(): void {
    this.tank = this.service.tank
  }

  openHardscape() {
    this.service.tank = this.tank
    this.router.navigate(['/hardscape']);
  }

}
