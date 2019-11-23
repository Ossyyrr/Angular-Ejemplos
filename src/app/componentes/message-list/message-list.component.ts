import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {
  messageList: string[];
  constructor(messageService: MessagesService) { 
    this.messageList = messageService.getMessageList();
  }

  ngOnInit() {
  }

}
