import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomValidators} from "./custom-validators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'userName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName], CustomValidators.asyncInvalidName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('critical', Validators.required)
    })
  }

  onSubmit() {
    console.log(this.projectForm.value);
    this.projectForm.reset();
  }
}
