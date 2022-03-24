import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FishService } from 'src/app/fish.service';
import { HardScapeQuestion } from 'src/app/model/hardscape-question.model';

@Component({
  selector: 'app-hardscape',
  templateUrl: './hardscape.component.html'
})
export class HardscapeComponent implements OnInit {

  question : HardScapeQuestion = new HardScapeQuestion('',false,'')
  answer : any = null
  

  constructor(private router: Router,
              private service: FishService) { }

  ngOnInit(): void {
    this.nextQuestion()
  }

    nextQuestion(){
    this.service.getNextQuestion(this.getAnswer()).subscribe(
      {
        next: (questions) => {
          let lastQuestion = questions[questions.length-1] 
          if(lastQuestion!=null) {
            this.question = lastQuestion.hardScapeQuestion
            this.service.currentQuestion = this.question.id
          }else
            this.openAquarion()  
        },
        error: (e) => console.error(e),
      }   
    )  
  }

  getAnswer(){
    switch (this.answer){
      case 'true':
        return true
      case 'false': 
        return false
      default:
        return this.answer   
    }

  }

 

  openDimentions() {
    this.router.navigate(['/dimentions']);
  }

  openAquarion(){
    this.service.resetQuestions()    
    this.router.navigate(['/aquarium']);
  }

}
