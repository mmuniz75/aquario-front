import { Component } from '@angular/core';

declare var window: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aquario';
  navegador = 'Chrome';


  openInstalationDialog(navegador : string){
    this.navegador = navegador
    let dialog = new window.bootstrap.Modal(
      document.getElementById('instalationDialog')
    );
    dialog.show()  

  }
}
