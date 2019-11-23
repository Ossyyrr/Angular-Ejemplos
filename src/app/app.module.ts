import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputComponentComponent } from './componentes/input-component/input-component.component';
import { ExampleComponentComponent } from './componentes/example-component/example-component.component';
import { OutputComponentComponent } from './componentes/output-component/output-component.component';
import { MessageListComponent } from './componentes/message-list/message-list.component';
import { MessageInputComponent } from './componentes/message-input/message-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponentComponent,
    ExampleComponentComponent,
    OutputComponentComponent,
    MessageListComponent,
    MessageInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
