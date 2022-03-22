import { Component, OnInit,ViewChildren, ElementRef, QueryList } from '@angular/core';
import { Router } from '@angular/router';

declare var window: any;

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html'
})
export class AquariumComponent implements OnInit {

  fishDialog: any;

  constructor(private router: Router) { }

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

}
