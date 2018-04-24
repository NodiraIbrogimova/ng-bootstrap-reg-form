import {Component, OnInit} from '@angular/core';
import {Data} from '../data';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  formData = new Data("Harmony", "Ludovic", "Arnaud");

  constructor() {
  }

  ngOnInit() {
  }


}
