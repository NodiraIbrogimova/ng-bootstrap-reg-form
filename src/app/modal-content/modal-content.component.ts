import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-content',
  templateUrl: './modal-content.component.html',
  styleUrls: ['./modal-content.component.css']
})
export class ModalContentComponent implements OnInit{
  @Input() forEditPerson: Person;
  person: Person = {
    firstName: '',
    middleName: '',
    lastName: ''
  };
  ngOnInit() {
    if (this.forEditPerson) {
      this.person = this.forEditPerson;
    }
  }

  constructor(public activeModal: NgbActiveModal) {
  }

  save() {
    this.activeModal.close(this.person);
  }

}
