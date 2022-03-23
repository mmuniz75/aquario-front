import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishService } from 'src/app/fish.service';
import { Tank } from 'src/app/model/tank.model';

@Component({
  selector: 'app-dimentions',
  templateUrl: './dimentions.component.html'
})
export class DimentionsComponent implements OnInit {

  height = ''
  length = ''
  width = ''
  
  constructor(private router: Router,
              private service: FishService) { }
  
  ngOnInit(): void {
    var tank = this.service.tank
    this.height = tank.height==0?'':tank.height.toString()
    this.length = tank.length==0?'':tank.length.toString()
    this.width = tank.width==0?'':tank.width.toString()
  }

  openHardscape() {
    var tank = new Tank(+this.width,+this.length,+this.height)
    this.service.tank = tank
    this.router.navigate(['/hardscape']);
  }

  isFilled(){
    return this.width != '' && this.length != '' && this.height != ''
  }

}
