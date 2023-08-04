import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'; // Reactive Forms

@Component({
  selector: 'app-mdf',
  templateUrl: './mdf.component.html',
  styleUrls: ['./mdf.component.css']
})
export class MdfComponent {
  form = new FormGroup({
    //username: new FormControl('', Validators.required),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    age: new FormControl('')
  });


}
