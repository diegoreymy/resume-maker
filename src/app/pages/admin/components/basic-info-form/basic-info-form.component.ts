import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IBasics } from 'src/app/shared/models/resume.model';

@Component({
  selector: '[app-basic-info-form]',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit {

  @Input() data: IBasics | undefined;

  form = new FormGroup({
    name: new FormControl(''),
    label: new FormControl(''),
    picture: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    summary: new FormControl(''),
    githubUrl: new FormControl(''),
    linkedinUrl: new FormControl(''),
  });

  loginLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

  save(event: Event) {
    this.loginLoading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      console.log(this.form);
    }
  }

  buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

}
