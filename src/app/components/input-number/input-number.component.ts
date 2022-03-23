import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-number',
  templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {

  @Input() label = ''

  private _value = ''

  @Input() 
  set value(value: string) {
    if(this._value === value) return;
    this._value = value;

    this.valueChange.emit(this._value);
  }  

  get value(){
    return this._value
  }


  @Output()
  valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  

}
