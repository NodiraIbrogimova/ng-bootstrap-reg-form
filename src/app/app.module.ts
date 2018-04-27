import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ModalContentComponent } from './modal-content/modal-content.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import {ReactiveFormsModule} from '@angular/forms';
import {UserService} from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    FormComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [FormComponent, ModalContentComponent],
})
export class AppModule { }
