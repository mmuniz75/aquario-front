import { Component, OnInit, ViewChildren } from '@angular/core';
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
  loading = false
  message = ''

  @ViewChildren('tagMessage') tagMessage:any;
  
  constructor(private router: Router,
              private service: FishService) { }

  ngOnInit(): void {
    this.nextQuestion()
  }

    nextQuestion(){
      this.loading = true
      this.service.getNextQuestion(this.getAnswer()).subscribe(
        {
          next: (questions) => {
            let lastQuestion = questions[questions.length-1] 
            if(lastQuestion!=null) {
              this.question = lastQuestion.hardScapeQuestion
              this.service.currentQuestion = this.question.id
              this.answer = null
              this.loading = false
            }else
              this.openAquarion()  
          },
          error: (e) => this.handle(e)
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
        return +this.answer   
    }

  }

  openDimentions() {
    this.router.navigate(['/dimentions']);
  }

  openAquarion(){
    this.loading = true;
    this.service.getAvaliableSpace().subscribe(
      {
        next: (response) => {
          this.service.centimeterAvaliable = response.centimeterAvaliable
          this.service.resetQuestions()    
          this.router.navigate(['/aquarium']);
        },
        error: (e) => this.handle(e)
      }
    )
    
  }

  handle(ex : any) {
    this.loading = false;
    console.log(ex)
    let message = ex && ex.error && ex.error.message ? ex.error.message : "Erro interno";
    this.message = message;
    this.tagMessage.first.open();
  }

}
