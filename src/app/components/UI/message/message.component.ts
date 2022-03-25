import { Component, Input, OnInit } from '@angular/core';

declare var window: any;

@Component({
  selector: 'message',
  templateUrl: './message.component.html'
})
export class MessageComponent implements OnInit {

  @Input() isError = false
  @Input() text = ''
  
  messageDialog: any
    
  ngOnInit(): void {
    this.messageDialog = new window.bootstrap.Modal(
      document.getElementById('messageDialog')
    )
  }

  getTitle() {
      return this.isError ? 'Aviso':'Confirmação'
  }

  open() {
    this.messageDialog.show()
  }

}
