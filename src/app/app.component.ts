import { Component, OnInit } from '@angular/core';
import { FishService } from './fish.service';

declare var window: any;
declare var navigator: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ANDROID = 'Chrome'
  IOS = 'Safari'

  title = 'aquario';
  navegador = '';

  constructor(private service : FishService){}

  ngOnInit(): void {
       this.service.startServer().subscribe()
  }

  getMenuOptionName(){
    return this.navegador == this.ANDROID ? "Adicionar à tela inicial" : "Tela de Início"
  }

  openInstalationDialog(navegador : string){
    this.navegador = navegador
    let dialog = new window.bootstrap.Modal(
      document.getElementById('instalationDialog')
    );
    dialog.show()  

  }

  isRunningFromMobileApp() {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (document.referrer.startsWith('android-app://')) {
      return true;
    } else if (navigator.standalone || isStandalone) {
      return true;
    }
    return false;
  }
}
