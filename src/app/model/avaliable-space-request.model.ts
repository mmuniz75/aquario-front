import { Answer } from "./answer.model";
import { Tank } from "./tank.model";

export class AvaliableSpaceRequest {

    constructor(public tank: Tank, public answers: Answer[]){}
}