import { HardScapeQuestion } from "./hardscape-question.model";

export class HardscapeResponse{

    constructor(public hardScapeQuestion:HardScapeQuestion,
                public answer : any ){}
}