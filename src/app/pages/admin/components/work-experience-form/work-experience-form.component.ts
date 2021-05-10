import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Work } from 'src/app/shared/models/resume.model';

@Component({
  selector: '[app-work-experience-form]',
  templateUrl: './work-experience-form.component.html',
  styleUrls: ['./work-experience-form.component.scss']
})
export class WorkExperienceFormComponent implements OnInit, OnChanges {

  @Input() work: Work = new Work();
  @Input() loading: boolean = false;
  @Output() onSaveWork = new EventEmitter<Work>();
  @Output() onDeleteWork = new EventEmitter();

  form = new FormGroup({});
  errorMessage: string = '';

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
    this.updateForm();
  }
  
  ngOnChanges(): void {
    if (this.work) {
      this.updateForm();
    }
  }

  save(event: Event) {
    this.loading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.copyInputsValueOnResume();
      this.onSaveWork.emit(this.work);
      this.loading = false;
    }
    
  }

  buildForm() {
    this.form = new FormGroup({
      company: new FormControl(''),
      position: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      summary: new FormControl(''),
      // highlights: new FormControl(['']),
    });
  }

  updateForm() {
    this.form.patchValue({
      company: this.work.company,
      position: this.work.position,
      startDate: this.work.startDate,
      endDate: this.work.endDate,
      summary: this.work.summary,
    });
  }

  copyInputsValueOnResume() {
    this.work.company = this.form.controls['company'].value;
    this.work.position = this.form.controls['position'].value;
    this.work.startDate = this.form.controls['startDate'].value;
    this.work.endDate = this.form.controls['endDate'].value;
    this.work.summary = this.form.controls['summary'].value;
  }

  onClickDeleteWork() {
    this.onDeleteWork.emit();
  }

}
