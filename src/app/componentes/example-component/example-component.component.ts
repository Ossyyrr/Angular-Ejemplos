import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-example-component',
  templateUrl: './example-component.component.html',
  styleUrls: ['./example-component.component.scss']
})
export class ExampleComponentComponent implements OnInit {

  exampleValue: string;
  name = 'Student';
  username = '';
  customForm: FormGroup;
  outputMessage = '';


  constructor(private formBuilder: FormBuilder) {
    console.log(this.exampleValue);
    console.log('I construct');
    this.exampleValue = 'I have value now';
    this.customForm = this.formBuilder.group({
      name: '',
      age: ''
    });

  }

  ngOnInit() {
    console.log(this.exampleValue);
    console.log('I act after constructing');
  }



  onButtonClick(): void {
    console.log('<Clicado>');
  }

  showInput(){
    console.log(this.username);
  }

  onSubmit(formValue){
    console.log(formValue);
    this.customForm.reset();
  }

  setMessage(message: string): void {
    this.outputMessage = message;
  }



}
