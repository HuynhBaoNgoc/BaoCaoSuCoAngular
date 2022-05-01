import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  submitted = false;
  loginForm = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.compose([
      Validators.required,
      Validators.minLength(6)
    ])]
  });
  constructor(private fb: FormBuilder) { }
  
  // loginForm = new FormGroup({
  //   userName: new FormControl(''),
  //   password: new FormControl(''),
  // });
  
  ngOnInit(): void {
    
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid){
      return;
    }
    alert('SUCCESS!! :-)')
    // // TODO: Use EventEmitter with form value
    // console.warn(this.loginForm.value);
  }
}
