import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../services/user.service';
import { ValidatorService } from '../services/validator.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  user: User = new User();
  isSubmitted = false;
  loading = false;

  constructor(
    private formBuilder: FormBuilder, 
    private validity: ValidatorService,
    private userService: UserService,
    private router: Router
    ) { }

  ngOnInit() {
    this.createUser();
  }
  
  createUser() {
    this.registrationForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.nullValidator],
      lastName: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      dob: ['', Validators.required],
      mobileNo: ['', Validators.required],
      password: ['', Validators.required, Validators.compose([this.validity.patternValidator()])],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: this.validity.MatchPassword('password', 'confirmPassword')
    });
  }

  get f(){
    return this.registrationForm.controls;
  }


  onSubmit() {
    this.isSubmitted = true;
    if (!this.registrationForm.valid) {
      alert('Kindly check the values again.');
    }
    this.loading = true;
    this.userService.createUser(this.registrationForm.value).pipe(first()).subscribe(data => {
      this.user = data;
      this.router.navigate(['/profile/:id']);
    },
    error => {
      alert('Kindly Feel the values again.');
      this.loading = false;
    });
  }
}
