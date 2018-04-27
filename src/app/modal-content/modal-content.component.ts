import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {User, Address} from '../data-model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit {
  @Input() editUser: User;
  person: User = {
    id: '',
    firstName: '',
    middleName: '',
    lastName: '',
    address: new Address(),
  };
  states;
  modalForm: FormGroup;



  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder) {
    this.createForm();
  }
  ngOnInit() {

    if (this.editUser) {
      this.person = this.editUser;
    }
  }
  save() {
    this.activeModal.close(this.person);
  }

  createForm() {
    this.modalForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.required],
      lastName: ['', Validators.required],
      state: '',
      city: '',
      address: this.formBuilder.group({
        street: '',
        citY: '',
        state: '',
        zip: '',
      }),
    });
    console.log("Create form pressed!");
  }
}
