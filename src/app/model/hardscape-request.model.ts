import { Answer } from "./answer.model";


export class HardScapeRequest{
    constructor (public question : string | null,
                 public answer : any,
                 public previousAnswers : Answer[]){}
}