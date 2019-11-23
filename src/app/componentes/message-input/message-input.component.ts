import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-message-input',
  templateUrl: './message-input.component.html',
  styleUrls: ['./message-input.component.scss']
})
export class MessageInputComponent implements OnInit {
  messageForm;
  constructor(
    private formBuilder: FormBuilder,
    private messageService: MessagesService
  ) { 
    this.messageForm = this.formBuilder.group({
      message: '',
    });
  }

  ngOnInit() {
  }

  onSubmit(formValue): void {
    let message: string = formValue.message;

    this.messageService.setMessageIntoList(message); 
    this.messageForm.reset();
  }
}
