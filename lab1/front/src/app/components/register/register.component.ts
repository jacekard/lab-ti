import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { MyErrorStateMatcher } from '../my-error-state-matcher';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public hasRegistered: Boolean = false;
  constructor(private authService: AuthService) { }

  isZSRR: Boolean = false;

  ngOnInit(): void {
    this.profileForm.get('address').get('country').valueChanges.subscribe(val => {
      if (val == "ZSRR") {
        console.log("ZSRR");
        this.isZSRR = true;
        document.body.style.backgroundImage = "url('assets/flag.svg')";
      } else {
        this.isZSRR = false;
        document.body.style.backgroundImage = "none";
      }
    });
  }

  profileForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
    name: new FormControl(''),
    surname: new FormControl(''),
    age: new FormControl('', [Validators.min(1)]),
    pesel: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      postalCode: new FormControl('', [Validators.pattern('^\\d{2}-\\d{3}$')]),
      city: new FormControl(''),
      country: new FormControl('', [Validators.pattern('^[a-zA-Z]+$')])
    })
  });

  matcher = new MyErrorStateMatcher();

  onSubmit() {
    this.authService.register(this.profileForm.value).subscribe(
        _ => {
          this.hasRegistered = true;
          Swal.fire('Success!', 'You can now log in.', 'success');
        },
        error => {
          if (error.status)
            Swal.fire('Sorry', 'Such user already exists.', 'error');
          else
            Swal.fire('Error!', 'Something went wrong.', 'error');
        });
  }
}
