import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { ModalContentComponent } from './modal-content/modal-content.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UsersListComponent } from './users-list/users-list.component';
import {DataService} from './data.service';
@NgModule({
  declarations: [
    AppComponent,
    ModalContentComponent,
    RegistrationFormComponent,
    UsersListComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
  entryComponents: [ModalContentComponent],
})
export class AppModule { }
