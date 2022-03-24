import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { Answer } from './model/answer.model';
import { HardScapeQuestion } from './model/hardscape-question.model';
import { HardScapeRequest } from './model/hardscape-request.model';
import { HardscapeResponse } from './model/hardscape-response.model';
import { Tank } from './model/tank.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  tank : Tank = new Tank();
  currentQuestion : string | null = null
  previousAnswers : Answer[] = []

  constructor(private http: HttpClient) { }


  getNextQuestion(answer : any) : Observable<HardscapeResponse[]>  {

    if(this.currentQuestion!=null)
      this.previousAnswers.push(new Answer(this.currentQuestion, answer))

    var request = new HardScapeRequest(this.currentQuestion, answer, this.previousAnswers)  

    return this.http.post<HardscapeResponse[]>(`${environment.SERVER_URL}/hardscapeQuestion`,request)

  }
}  
