import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aquarium',
  templateUrl: './aquarium.component.html'
})
export class AquariumComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openHardscape() {
    this.router.navigate(['/hardscape']);
  }

}
