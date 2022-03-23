

export class Tank {
    width!: number;
    length!: number;
    height!: number;


    isFilled(){
        return this.width > 0 && this.length > 0 && this.height > 0
    }

}