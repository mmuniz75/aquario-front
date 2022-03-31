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
import { TANK, SPACE_AVALIABLE} from './consts'

@Injectable({
  providedIn: 'root'
})
export class FishService {

  private _tank : Tank = new Tank();
  set tank(tank : Tank){
    this._tank = tank
    localStorage.setItem(TANK, JSON.stringify(tank)); 
  }
  get tank() : Tank{
    return this._tank
  }

  private _centimeterAvaliable = 0
  get centimeterAvaliable() : number{
     return this._centimeterAvaliable 
  }

  set centimeterAvaliable(space : number){
    this._centimeterAvaliable = space
    localStorage.setItem(SPACE_AVALIABLE, space.toString()); 
  }
  
  constructor(private http: HttpClient) { 
    let space = localStorage.getItem(SPACE_AVALIABLE)
    let tank = localStorage.getItem(TANK)
    this._tank = tank!=null?JSON.parse(tank):new Tank()

    this._centimeterAvaliable = space==null?0:+space!!
  }

  getNextQuestion(answer : any,currentQuestion : string | null, previousAnswers : Answer[]) : Observable<HardscapeResponse[]>  {
    var request = new HardScapeRequest(currentQuestion, answer, previousAnswers)  
    return this.http.post<HardscapeResponse[]>(`${environment.SERVER_URL}/hardscapeQuestion`,request)
  }

  getAvaliableSpace(answers : Answer[]) : Observable<AvaliableSpaceResponse> {
    var request = new AvaliableSpaceRequest(this._tank, answers)
    return this.http.post<AvaliableSpaceResponse>(`${environment.SERVER_URL}/avaliableSpace`,request)
  }

  listFishs(currentFishs : number[], centimeterAvaliable : number) : Observable<Fish[]> {
    var request = new FishRequest(this._tank.width, this._tank.length, centimeterAvaliable, currentFishs)
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

  startServer() {
     return this.http.get(`${environment.SERVER_URL}/start`)
  }

}  
