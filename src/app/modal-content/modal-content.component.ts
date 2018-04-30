import {Component, Input} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Validators} from '@angular/forms';
import {User} from '../data-model';

class ModalService {
}

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent {

  @Input() modalList;
  @Input() index;

  list = this.modalList;
  modalGroup: FormGroup;
  states = ['Uzbekistan', 'Russia', 'Korea', 'Germany', 'Italy', 'Brazil'];

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.createForm();
    console.log(this.list);
  }

  createForm() {
    this.modalGroup = this.formBuilder.group({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });
  }

  save(list) {
    this.activeModal.close({index: this.index, user: { name: "changedName"}});
  }

}
