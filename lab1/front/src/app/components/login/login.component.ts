import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MyErrorStateMatcher } from '../my-error-state-matcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public isLoginSuccessful = false;
  public hasLoggedIn: Boolean = false;
  public matcher = new MyErrorStateMatcher();
  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  });

  constructor(
    private authService: AuthService) { }
    
  ngOnInit(): void {
  }
  
  public onLogin() : void {
    console.warn(this.loginForm.value);
    this.authService.login(this.loginForm.value.login, this.loginForm.value.password)
      .subscribe(user => {
        this.isLoginSuccessful = true;
        this.authService.isUserLoggedIn = true;
        Swal.fire('Hello ' + user.login + '!', 'You are correctly logged in.', 'success');
      },
        error => {
          this.isLoginSuccessful = false;
          this.authService.isUserLoggedIn = false;
          Swal.fire('Access denied!', 'Your login/password is incorrect.', 'error');
        }
      ).add(() => this.hasLoggedIn = true);
  }
}
