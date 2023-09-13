import { Component } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-chat-interface',
  templateUrl: './chat-interface.component.html',
  styleUrls: ['./chat-interface.component.css'],
})
export class ChatInterfaceComponent {
  messages: string[] = [];
  newMessage: string = '';

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit() {
    this.webSocketService.connect();
    this.webSocketService.getMessage().subscribe((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    if (this.newMessage.trim() !== '') {
      this.webSocketService.sendMessage(this.newMessage);
      this.newMessage = '';
    }
  }
}
