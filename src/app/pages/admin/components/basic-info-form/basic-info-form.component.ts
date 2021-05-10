import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Basics, Resume } from 'src/app/shared/models/resume.model';

@Component({
  selector: '[app-basic-info-form]',
  templateUrl: './basic-info-form.component.html',
  styleUrls: ['./basic-info-form.component.scss']
})
export class BasicInfoFormComponent implements OnInit,OnChanges {

  @Input() resume: Resume = new Resume();
  @Input() loading: boolean = false;
  @Output() onSaveResume = new EventEmitter<Resume>();

  form = new FormGroup({});
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }
  
  ngOnChanges(): void {
    if (this.resume) {
      this.updateForm();
    }
  }

  save(event: Event) {
    this.loading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.copyInputsValueOnResume();
      this.onSaveResume.emit(this.resume);
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
      username: this.resume.username,
      name: this.resume.basics.name,
      label: this.resume.basics.label,
      phone: this.resume.basics.phone,
      picture: this.resume.basics.picture,
      summary: this.resume.basics.summary,
      linkedinUrl: this.resume.basics.linkedinUrl,
      githubUrl: this.resume.basics.githubUrl,
    });
  }

  copyInputsValueOnResume() {
    this.resume.username = this.form.controls['username'].value;
    this.resume.basics = new Basics();
    this.resume.basics.name = this.form.controls['name'].value;
    this.resume.basics.label = this.form.controls['label'].value;
    this.resume.basics.phone = this.form.controls['phone'].value;
    this.resume.basics.picture = this.form.controls['picture'].value;
    this.resume.basics.summary = this.form.controls['summary'].value;
    this.resume.basics.linkedinUrl = this.form.controls['linkedinUrl'].value;
    this.resume.basics.githubUrl = this.form.controls['githubUrl'].value;
  }

}
