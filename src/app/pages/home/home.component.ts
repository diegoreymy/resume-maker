import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LOGIN_ERROR_MESSAGES } from 'src/app/shared/constants/loginErrorMessages.constant';
import { Resume } from 'src/app/shared/models/resume.model';
import { IUserLogin } from 'src/app/shared/models/user.model';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { ResumeService } from 'src/app/shared/services/resume.service';

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

  errorMessage: string = '';
  loginLoading: boolean = false;
  registerLoading: boolean = false;
  resume: Resume = new Resume();;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private resumeService: ResumeService
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  login(event: Event) {
    this.loginLoading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.setUser(this.form);
      this.authenticationService.signIn(this.user).then(() => {
        this.loginLoading = false;
        this.router.navigate(['admin']);
      }).catch((error: any) => {
        this.loginLoading = false;
        this.printErrorByCode(error.code);
      })
    }
  }

  register(event: Event) {
    this.registerLoading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.setUser(this.form);
      this.authenticationService.signUp(this.user).then((data) => {
        this.resume.email = data?.user?.email || '';
        this.resumeService.createResume(this.resume).subscribe(() => {
          this.registerLoading = false;
          this.router.navigate(['admin']);
        });
      }).catch((error: any) => {
        this.registerLoading = false;
        this.printErrorByCode(error.code);
      })
    }
  }

  buildForm() {
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

  printErrorByCode(code: string) {
    code = code.split('/')[1];
    if (LOGIN_ERROR_MESSAGES[code]) {
      this.errorMessage = LOGIN_ERROR_MESSAGES[code];
    } else {
      this.errorMessage = 'ha ocurrido un error desconocido! Intente nuevamente mas tarde. ';
    }
  }
}