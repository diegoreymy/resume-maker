import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Education, Language } from 'src/app/shared/models/resume.model';

@Component({
  selector: '[app-studies-and-certifications-form]',
  templateUrl: './studies-and-certifications-form.component.html',
  styleUrls: ['./studies-and-certifications-form.component.scss']
})
export class StudiesAndCertificationsFormComponent implements OnInit {

  @Input() education: Education = new Education();
  @Input() loading: boolean = false;
  @Output() onSaveEducation = new EventEmitter<Education>();
  @Output() onDeleteEducation = new EventEmitter();

  form = new FormGroup({});
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
    this.updateForm();
  }
  
  ngOnChanges(): void {
    if (this.education) {
      this.updateForm();
    }
  }

  save(event: Event) {
    this.loading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.copyInputsValueOnResume();
      this.onSaveEducation.emit(this.education);
      this.loading = false;
    }
    
  }

  buildForm() {
    this.form = new FormGroup({
      area: new FormControl(''),
      institution: new FormControl(''),
      studyType: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl('')
    });
  }

  updateForm() {
    this.form.patchValue({
      area: this.education.area,
      institution: this.education.institution,
      studyType: this.education.studyType,
      startDate: this.education.startDate,
      endDate: this.education.endDate,
    });
  }

  copyInputsValueOnResume() {
    this.education.area = this.form.controls['area'].value;
    this.education.institution = this.form.controls['institution'].value;
    this.education.studyType = this.form.controls['studyType'].value;
    this.education.startDate = this.form.controls['startDate'].value;
    this.education.endDate = this.form.controls['endDate'].value;
  }

  onClickDeleteEducation() {
    this.onDeleteEducation.emit();
  }

}
