import { Component } from '@angular/core';
import { User } from './interfaces/user';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRegisterForm: Boolean = false;
  isLoginForm: Boolean = false;
  isFormVisible: Boolean = false;
  
  get isUserLoggedIn(): Boolean {
    return this.authService.isUserLoggedIn;
  }

  constructor(private authService: AuthService) {
  }

  toggleLoginForm() {
    this.isLoginForm = !this.isLoginForm;
    this.isFormVisible = true;
  }

  toggleRegisterForm() {
    this.isRegisterForm = !this.isRegisterForm;
    this.isFormVisible = false;
  }
}
