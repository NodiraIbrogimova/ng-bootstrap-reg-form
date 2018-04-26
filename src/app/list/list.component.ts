import {Component, OnInit} from '@angular/core';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: Person[] = [];

  constructor(private modalService: NgbModal) {

  }

  ngOnInit() {
  }

  openAddModal() {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true});
    modalRef.result.then(person => {
      this.list.push(person);
    });
  }

  openEditModal(item) {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true});
    modalRef.componentInstance.forEditPerson = item;
  }


}
