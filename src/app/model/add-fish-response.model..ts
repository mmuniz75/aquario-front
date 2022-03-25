export class AddFishResponse{
    constructor( public temperatureRange: string,
                 public phRAnge: string,
                 public dhRange: string,
                 public spaceAvaliableInCentimer: number){}
}