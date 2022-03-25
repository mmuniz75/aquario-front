import { Component, OnInit,ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router } from '@angular/router';
import { FishService } from 'src/app/fish.service';
import { Tank } from 'src/app/model/tank.model';

declare var window: any;

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html'
})
export class AquariumComponent implements OnInit {
  
  loading = false
  message = ''
  fishDialog: any;
  @ViewChildren('tagMessage') tagMessage:any;
  

  constructor(private router: Router,
              private service: FishService) { }

  ngOnInit(): void {
    this.fishDialog = new window.bootstrap.Modal(
      document.getElementById('fishDialog')
    );
  }

  openHardscape() {
    this.router.navigate(['/hardscape']);
  }

  openFishDialog(){
    this.fishDialog.show();
  }

  getAvaliableSpace(){
    return this.service.centimeterAvaliable
  }

  handle(ex : any) {
    this.loading = false;
    console.log(ex)
    let message = ex && ex.error && ex.error.message ? ex.error.message : "Erro interno";
    this.message = message;
    this.tagMessage.first.open();
  }

}
