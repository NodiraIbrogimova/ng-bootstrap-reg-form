import {Component, OnInit} from '@angular/core';
import {Data} from '../data';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalContentComponent} from '../modal-content/modal-content.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public list: Data[] = [];
  submitted: boolean;
  form = {
    firstName: "",
    middleName: "",
    lastName: ""
  }

  constructor(private modalService: NgbModal) {
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
    console.log("I pressed the submit button");
    this.list.push({firstName: this.form.firstName, middleName: this.form.middleName, lastName: this.form.lastName});

  }

}
