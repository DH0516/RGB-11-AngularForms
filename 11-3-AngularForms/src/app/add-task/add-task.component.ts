import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  form:FormGroup = new FormGroup({
    title: new FormControl('', Validators.required), //1
    description: new FormControl('', Validators.required), //2
    date: new FormControl('', Validators.required), //3
    time: new FormControl('', Validators.required), //4
    priority_level: new FormControl('', Validators.required), //5
    category: new FormControl('', Validators.required), //6
    progress_level: new FormControl('', Validators.required) //7
  });

  get title() { return this.form.get('title'); } //1 
  get description() { return this.form.get('description'); } //2
  get date() { return this.form.get('date'); } //3
  get time() { return this.form.get('time');} //4
  get priority_level() { return this.form.get('priority_level');} //5
  get category() { return this.form.get('category');} //6
  get progress_level() { return this.form.get('progress_level');} //7

  add_task() {
    console.log(this.form.value);
  }

}
