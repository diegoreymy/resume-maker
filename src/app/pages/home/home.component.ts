import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserLogin } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  user: IUserLogin = {
    email: "",
    password: ""
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      this.setUser(this.form);
      this.authenticationService.signIn(this.user).then((result: any) => {
        console.log(result)
        this.router.navigate(['admin']);
      }).catch((error: any) => {
        console.log(error)
      })
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  setUser(form: FormGroup) {
    const { email, password } = form.value;
    this.user.email = email;
    this.user.password = password;
  }

}