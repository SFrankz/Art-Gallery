import { Component, Input, OnInit } from '@angular/core';
import { WebSocketService } from '../web-socket.service';

@Component({
  selector: 'app-picture-discussion',
  templateUrl: './picture-discussion.component.html',
  styleUrls: ['./picture-discussion.component.css']
})
export class PictureDiscussionComponent implements OnInit {
  @Input() picture: any;
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
