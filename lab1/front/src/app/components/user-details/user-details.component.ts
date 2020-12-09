import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private authService: AuthService) { }

  get isUserLoggedIn(): Boolean {
    return this.authService.isUserLoggedIn;
  }

  get currentUser(): User {
    console.log(this.authService.currentUser);
    return this.authService.currentUser;
  }

  ngOnInit(): void {
  }
}