export class AddFishRequest{
    constructor( public fishId : number,
                 public fishCount : number,
                 public centimetersAvailable : number,
                 public currentFishIds : number[]){}
}