import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms' ;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'froala-test';
  showEditor = true;

  myForm;

  constructor(
    private fb: FormBuilder
    ) {
    this.myForm = this.fb.group({
      'content' : ['Hello Froala!!!']
    })
  }
}
