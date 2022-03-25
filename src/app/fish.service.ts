import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

import { environment } from 'src/environments/environment';
import { AddFishRequest } from './model/add-fish-request.model';
import { ParametersResponse } from './model/parameters-response.model.';
import { Answer } from './model/answer.model';
import { AvaliableSpaceRequest } from './model/avaliable-space-request.model';
import { AvaliableSpaceResponse } from './model/avaliable-space-response.model';
import { FishRequest } from './model/fish-request.model';
import { Fish } from './model/fish.model';
import { HardScapeQuestion } from './model/hardscape-question.model';
import { HardScapeRequest } from './model/hardscape-request.model';
import { HardscapeResponse } from './model/hardscape-response.model';
import { Tank } from './model/tank.model';

@Injectable({
  providedIn: 'root'
})
export class FishService {

  tank : Tank = new Tank(130,50,50);
  currentQuestion : string | null = null
  previousAnswers : Answer[] = []
  centimeterAvaliable = 200

  constructor(private http: HttpClient) { }


  getNextQuestion(answer : any) : Observable<HardscapeResponse[]>  {
    if(this.currentQuestion!=null)
      this.previousAnswers.push(new Answer(this.currentQuestion, answer))

    var request = new HardScapeRequest(this.currentQuestion, answer, this.previousAnswers)  

    return this.http.post<HardscapeResponse[]>(`${environment.SERVER_URL}/hardscapeQuestion`,request)
  }

  getAvaliableSpace() : Observable<AvaliableSpaceResponse> {
    var request = new AvaliableSpaceRequest(this.tank, this.previousAnswers)
    return this.http.post<AvaliableSpaceResponse>(`${environment.SERVER_URL}/avaliableSpace`,request)
  }

  listFishs(currentFishs : number[], centimeterAvaliable : number) : Observable<Fish[]> {
    var request = new FishRequest(this.tank.width, this.tank.length, centimeterAvaliable, currentFishs)
    return this.http.post<Fish[]>(`${environment.SERVER_URL}/fish`,request)
  }

  addFish(fishId : number, fishCount : number, centimeterAvaliable : number, currentFishs : number[]) : Observable<ParametersResponse> {
    var request = new AddFishRequest(fishId, fishCount, centimeterAvaliable, currentFishs)
    return this.http.put<ParametersResponse>(`${environment.SERVER_URL}/fish`,request)
  }

  getFishsParameter(fishs : number[]) : Observable<ParametersResponse> {
    var request = new AddFishRequest(0, 0, 0, fishs)
    return this.http.post<ParametersResponse>(`${environment.SERVER_URL}/fish-parameter`,request)
  }

  resetQuestions(){
    this.previousAnswers = []
    this.currentQuestion = null
  }
}  
