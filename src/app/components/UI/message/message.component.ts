import { Component, Input, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})
export class MessageComponent  {

  @Input() isError = false
  @Input() text = ''
  
  messageDialog: any

  getTitle() {
      return this.isError ? 'Aviso':'Confirmação'
  }

  open() {
    let dialog = new window.bootstrap.Modal(
      document.getElementById('messageDialog')
    )
    dialog.show()
  }

}
