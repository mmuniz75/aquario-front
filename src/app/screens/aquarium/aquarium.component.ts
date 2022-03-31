import { Component, OnInit,ViewChildren, ElementRef, QueryList } from '@angular/core';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { FishService } from 'src/app/fish.service';
import { Fish } from 'src/app/model/fish.model';
import { ParametersResponse } from 'src/app/model/parameters-response.model.';
import { School } from 'src/app/model/school.model';
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
  fishCount = 0
  currentFishId = 0

  centimeterAvaliable = 0
  phRange = ''
  dhRange = ''
  temperatureRange = ''

  schools : School[] = []
  
  constructor(private router: Router,
              private service: FishService) { }

  ngOnInit(): void {
    this.loading = true
    this.fishDialog = new window.bootstrap.Modal(
      document.getElementById('fishDialog')
    );
    this.centimeterAvaliable = this.service.centimeterAvaliable
    this.fetchFishs();
    
  }

  fetchFishs(){
    let fishIds = this.schools.map(school => school.fish.id)
    this.service.listFishs(fishIds, this.centimeterAvaliable).subscribe(
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
    this.fishCount = this.fish.minNumber
    this.fishDialog.show();
  }

  closeFishDialog(){
    this.fish = new Fish()
    this.currentFishId = 0
    this.fishDialog.hide()
  }

  addFish() {
      if (this.fishCount < this.fish.minNumber) {
          this.ShowError("Quantidade mínima para essa espécie no aquário é " + this.fish.minNumber)
          return
      }    

    this.loading = true
        
    this.service.addFish(this.fish.id, this.fishCount, this.centimeterAvaliable, this.schools.map( school => school.fish.id) ).subscribe(
      {
        next: (response) => {
          let addedFish = new School(this.fishs.find(fish => fish.id == this.fish.id)!, this.fishCount)
          this.schools.push(addedFish!)
          this.setParameters(response)
          this.centimeterAvaliable = response.spaceAvaliableInCentimer
          this.fetchFishs()
          this.fishCount = this.fish.minNumber
          this.fishDialog.hide()
        },
        error: (e) => {
          console.log(e)
          let error = {'error' : {'message' : 'Não é possivel adicionar esses peixes pois o aquario não suporta essa quantidade'}}
          this.handle(error)
        }  
      }   
    )  
  }

  setParameters(response : ParametersResponse){
    this.dhRange = response.dhRange
    this.phRange = response.phRAnge
    this.temperatureRange = response.temperatureRange
  }
  
  removeFish(id : number){

    let schoolToRemove = this.schools.filter(school => school.fish.id == id)[0]
    let returningSpace = schoolToRemove.count * schoolToRemove.fish.size
    this.schools = this.schools.filter(school => school.fish.id != id)

    if(this.schools.length==0){
      this.resetValues()
      this.fetchFishs()
    }else {
      this.centimeterAvaliable+=returningSpace    
      this.setPreviousParameters()
    }  
    
    this.currentFishId = 0
  }

  setPreviousParameters(){
    this.service.getFishsParameter(this.schools.map( school => school.fish.id) ).subscribe(
      {
        next: (response) => {
          this.setParameters(response)
          this.fetchFishs()
        },
        error: (e) => this.handle(e)
      }   
    )  
  }

  resetValues(){
    this.dhRange = ''
    this.phRange = ''
    this.temperatureRange = ''
    this.centimeterAvaliable = this.service.centimeterAvaliable
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
