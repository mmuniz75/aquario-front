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

  phRange = ''
  dhRange = ''
  temperatureRange = ''

  currentFishs : Fish[] = []
  
  constructor(private router: Router,
              private service: FishService) { }

  ngOnInit(): void {
    this.loading = true
    this.fishDialog = new window.bootstrap.Modal(
      document.getElementById('fishDialog')
    );
    this.fetchFishs();
  }

  fetchFishs(){

    let fishIds = this.currentFishs.map(fish => fish.id)
    this.service.listFishs(fishIds).subscribe(
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

    this.loading = true
        
    this.service.addFish(this.fish.id, this.fishAmount,this.currentFishs.map( fish => fish.id) ).subscribe(
      {
        next: (response) => {
          let addedFish = this.fishs.find(fish => fish.id == this.fish.id)
          this.currentFishs.push(addedFish!)
          this.dhRange = response.dhRange
          this.phRange = response.phRAnge
          this.temperatureRange = response.temperatureRange
          this.service.centimeterAvaliable = response.spaceAvaliableInCentimer
          this.fetchFishs()
          this.fishDialog.close()
        },
        error: (e) => this.handle(e)
      }   
    )  


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
