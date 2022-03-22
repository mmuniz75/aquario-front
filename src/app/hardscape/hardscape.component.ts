import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hardscape',
  templateUrl: './hardscape.component.html'
})
export class HardscapeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openDimentions() {
        this.router.navigate(['/dimentions']);
  }

}
