import {Component} from '@angular/core';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  title = 'Modal Example';

  constructor(private modalService: NgbModal) {
  }

  open() {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true});
    modalRef.componentInstance.firstName = "Name";
    modalRef.componentInstance.middleName = "Name";
    modalRef.componentInstance.lastName = "Name";
  }
}
