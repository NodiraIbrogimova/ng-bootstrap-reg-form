import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormGroup} from '@angular/forms';
import {Data} from '../data';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {
  fName;
  mName;
  lName;
  form = new Data("", "", "");
  submitted = false;

  constructor(public activeModal: NgbActiveModal) {
  }

  onSubmit() {
    console.log("onSubmit works");

    this.submitted = true;
  }

}
