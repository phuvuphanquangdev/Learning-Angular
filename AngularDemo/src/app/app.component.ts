import { Component, OnInit, ViewChild } from '@angular/core';  
import { Validators, FormBuilder, FormControl, FormGroup  } from '@angular/forms';  
  
@Component({  
  selector: 'app-root',  
  templateUrl: './app.component.html',  
  styleUrls : ['./custom.css']  
})  
export class AppComponent implements OnInit {  
  private formData: any = {};  
  
  username = new FormControl('', [  
      Validators.required,  
      Validators.minLength(5)  
  ]);  
  
  password = new FormControl('', [  
      Validators.required,  
      hasExclamationMark  
  ]);  
  
  loginForm: FormGroup = this.builder.group({  
      username: this.username,  
      password: this.password  
  });  
  
  private showMessage: boolean = false;  
  
  constructor(private builder: FormBuilder) {  
  }  
  
  ngOnInit(): void {  
  }  
  
  registerUser() {  
      this.formData = this.loginForm.value;  
      this.showMessage = true;  
  }  
}  
  
function hasExclamationMark(input: FormControl) {  
  const hasExclamation = input.value.indexOf('!') >= 0;  
  return hasExclamation ? null : { needsExclamation: true };  
}  