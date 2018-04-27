import {Component, OnInit, Input} from '@angular/core';
import {ModalContentComponent} from '../modal-content/modal-content.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {User, Address} from '../data-model';
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {UserService} from '../user.service';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  list: User[] = [];
  public groupForm: FormGroup;
  public states = [
    'Banggok', 'Tashkent', 'Seoul', 'Incheon'
  ];
  @Input() user: User;
  nameChangeLog: string[] = [];
  submitted: boolean;

  constructor(private modalService: NgbModal, public formBuilder: FormBuilder, private userService: UserService) {
    this.createForm();
  }

  ngOnInit() {
    this.submitted = true;
  }

  openAddModal() {
    console.log("openAddModal");
    const modalRef = this.modalService.open(ModalContentComponent);
    modalRef.result.then(person => {
      this.list.push(person);
    });
  }

  openEditModal(item) {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true});
    modalRef.componentInstance.editUser = item;
  }

  get diagnostic() {
    return JSON.stringify(this.list);
  }

  open() {
    const modalRef = this.modalService.open(ModalContentComponent, {centered: true});
  }

  onSubmit() {
    this.submitted = true;
    this.list.push({
      id: this.groupForm.value.id,
      firstName: this.groupForm.value.firstName,
      middleName: this.groupForm.value.middleName,
      lastName: this.groupForm.value.lastName,
      address: this.groupForm.value.address,
    });
    // onsubmitting the form, prepare user for saving
    this.user = this.prepareSaveUser();
    console.log("On works!");
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
    console.log("Create form pressed!");
  }

  rebuildForm() {
    this.groupForm.reset({
      firstName: this.user.firstName
    });
    // this.setAddress(this.user.address);
  }

  setAddress(addresses: Address[]) {
    // The map() method creates a new array with the results of calling a provided function on every element in the calling array.
    const addressFormGroups = addresses.map(address => this.formBuilder.group(address));
    const addressFormArray = this.formBuilder.array(addressFormGroups);
  }

  prepareSaveUser(): User {
    // getting the value of groupForms
    const formModel = this.groupForm.value;
    // saved user for returing through the function
    const saveUser: User = {
      id: this.user.id,
      firstName: this.user.firstName,
      middleName: this.user.middleName,
      lastName: this.user.lastName,
      address: this.user.address,
    };
    // return result
    return saveUser;
  }

  revert() {
    this.rebuildForm();
  }

  rebuildUser() {
    this.groupForm.reset({
      id: this.user.id
    });
    // this.setAddress(this.user.address);
  }

  logNameChange() {
    const nameControl = this.groupForm.get('firstName');
    nameControl.valueChanges.forEach((value: string) =>
      this.nameChangeLog.push(value));
  }


}
