import { Component, OnInit } from '@angular/core';
import { FishService } from './fish.service';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aquario';
  navegador = 'Chrome';

  constructor(private service : FishService){}

  ngOnInit(): void {
       this.service.startServer().subscribe()
  }

  openInstalationDialog(navegador : string){
    this.navegador = navegador
    let dialog = new window.bootstrap.Modal(
      document.getElementById('instalationDialog')
    );
    dialog.show()  

  }
}
