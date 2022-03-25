import { Component, OnInit,ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { FishService } from 'src/app/fish.service';
import { Fish } from 'src/app/model/fish.model';
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
  fishs : Fish[] = []
  fish : Fish = new Fish()
  fishAmount = 0
  
  constructor(private router: Router,
              private service: FishService) { }

  ngOnInit(): void {
    this.loading = true
    this.fishDialog = new window.bootstrap.Modal(
      document.getElementById('fishDialog')
    );
    this.service.listFishs().subscribe(
      {
        next: (fishs) => {
          this.fishs = fishs
          this.loading = false
        },
        error: (e) => this.handle(e)
      }   
    )  
  }

  openHardscape() {
    this.router.navigate(['/hardscape']);
  }

  openFishDialog(id : string){
    this.fish = this.fishs.find(fish => fish.id == +id)!
    this.fishAmount = this.fish.minNumber
    this.fishDialog.show();
  }

  addFish() {
    if (this.fishAmount < this.fish.minNumber)
      this.ShowError("Quantidade mínima para essa espécie no aquário é " + this.fish.minNumber)

  }

  getAvaliableSpace(){
    return this.service.centimeterAvaliable
  }

  handle(ex : any) {
    console.log(ex)
    let message = ex && ex.error && ex.error.message ? ex.error.message : "Erro interno";
    this.ShowError(message)
  }  

    ShowError(message : string) {
      this.loading = false;
      this.message = message;
      this.tagMessage.first.open();
    }

}
