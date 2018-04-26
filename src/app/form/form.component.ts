import {Component, OnInit} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public list: Person[] = [];
  groupForm: FormGroup;
  submitted: boolean;
  form = {
    firstName: '',
    middleName: '',
    lastName: ''
  }
  public states = [
    'Banggok', 'Tashkent', 'Seoul', 'Incheon'
  ];

  constructor(private modalService: NgbModal, private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.submitted = true;
  }

  get diagnostic() {
    return JSON.stringify(this.list);
  }

  open() {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true});
  }

  onSubmit() {
    this.submitted = true;
    this.list.push({firstName: this.form.firstName, middleName: this.form.middleName, lastName: this.form.lastName});

  }

  createForm() {
    this.groupForm = this.formBuilder.group({
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
  }

}
