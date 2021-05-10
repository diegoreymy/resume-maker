import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Basics } from 'src/app/shared/models/resume.model';

@Component({
  selector: '[app-basic-info-form]',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit, OnChanges {

  @Input() basics: Basics = new Basics();
  @Input() username: string = '';
  @Input() email: string = '';
  @Input() loading: boolean = false;
  @Output() onSaveBasics = new EventEmitter<any>();

  form = new FormGroup({});
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
    this.updateForm();
  }
  
  ngOnChanges(): void {
    if (this.basics && this.username) {
      this.updateForm();
    }
  }

  save(event: Event) {
    this.loading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.copyInputsValueOnResume();
      this.onSaveBasics.emit({ basics: this.basics, username: this.username});
      this.loading = false;
    }
    
  }

  buildForm() {
    this.form = new FormGroup({
      username: new FormControl(''),
      name: new FormControl(''),
      label: new FormControl(''),
      phone: new FormControl(''),
      picture: new FormControl(''),
      summary: new FormControl(''),
      linkedinUrl: new FormControl(''),
      githubUrl: new FormControl(''),
    });
  }

  updateForm() {
    this.form.patchValue({
      username: this.username,
      name: this.basics.name,
      label: this.basics.label,
      phone: this.basics.phone,
      picture: this.basics.picture,
      summary: this.basics.summary,
      linkedinUrl: this.basics.linkedinUrl,
      githubUrl: this.basics.githubUrl,
    });
  }

  copyInputsValueOnResume() {
    this.username = this.form.controls['username'].value;
    this.basics.name = this.form.controls['name'].value;
    this.basics.label = this.form.controls['label'].value;
    this.basics.phone = this.form.controls['phone'].value;
    this.basics.picture = this.form.controls['picture'].value;
    this.basics.summary = this.form.controls['summary'].value;
    this.basics.linkedinUrl = this.form.controls['linkedinUrl'].value;
    this.basics.githubUrl = this.form.controls['githubUrl'].value;
  }

}
