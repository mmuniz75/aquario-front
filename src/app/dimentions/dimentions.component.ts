import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dimentions',
  templateUrl: './dimentions.component.html'
})
export class DimentionsComponent implements OnInit {

  constructor(private router: Router) { }
  
  ngOnInit(): void {
  }

  openHardscape() {
    this.router.navigate(['/hardscape']);
  }

}
