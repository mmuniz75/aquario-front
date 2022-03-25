export class FishRequest{
    constructor( public tankWidth : number,
                 public tankLength : number,
                 public centimetersAvailable : number,
                 public currentFishIds : number[] ) {}
}