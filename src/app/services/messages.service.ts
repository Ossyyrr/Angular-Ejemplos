import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messageList: string[] = [];
  constructor() { }

  getMessageList(): string[]{
    return this.messageList;
  }
  setMessageIntoList(message: string): void {
    this.messageList.push(message);
  }
}
