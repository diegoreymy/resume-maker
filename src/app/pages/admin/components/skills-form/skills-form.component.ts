import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Skill } from 'src/app/shared/models/resume.model';

@Component({
  selector: '[app-skills-form]',
  templateUrl: './skills-form.component.html',
  styleUrls: ['./skills-form.component.scss']
})
export class SkillsFormComponent implements OnInit {

  @Input() skills: Skill[] = [new Skill()];
  @Input() loading: boolean = false;
  @Output() onSaveSkills = new EventEmitter<Skill[]>();

  form = new FormGroup({});
  errorMessage: string = '';
  numbers = new Array(10);

  constructor() {}

  ngOnInit(): void {
  }
  
  save(event: Event) {
    this.loading = true;
    this.errorMessage = "";
    event.preventDefault();
    if (this.form.valid) {
      this.onSaveSkills.emit(this.skills);
      this.loading = false;
    }
  }

  addSkill(skill: Skill) {
    this.skills.push(skill)
  }

  removeSkill(index: number) {
    this.skills.splice(index, 1)
  }

}
