import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { faBriefcase, faAddressCard, faDumbbell, faUserGraduate, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { ResumeService } from 'src/app/shared/services/resume.service';
import { Basics, Education, Resume, Skill, Work } from 'src/app/shared/models/resume.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentEmailUser$ = new Observable;
  suscriptions = new Subscription();
  resume: Resume = new Resume();
  loading: boolean = false;
  showToast: boolean = false;
  selectedForm = 'Información personal';

  labelForms = [
    {
      label: 'Información personal',
      icon: faAddressCard
    },
    {
      label: 'Experiencias laborales',
      icon: faBriefcase
    },
    {
      label: 'Estudios o certificaciones',
      icon: faUserGraduate
    },
    {
      label: 'Habilidades',
      icon: faDumbbell
    }
  ]

  icons = {
    addressCard: faAddressCard,
    userGraduate: faUserGraduate,
    dumbbell: faDumbbell,
    briefcase: faBriefcase,
    userCircle: faUserCircle,
  };

  constructor(
    private authenticationService: AuthenticationService,
    private resumeService: ResumeService
  ) {
    this.suscriptions.add(this.authenticationService.currentEmailUser$.subscribe((email: string) => {
      this.getResumeByEmail(email);
    }));
  }

  ngOnInit(): void {
    this.authenticationService.getCurrentEmailUser();
  }

  signOut() {
    this.authenticationService.signOut();
  }

  getResumeByEmail(email: string) {
    this.resumeService.getResumeByEmail(email).subscribe((resume: Resume[]) => {
      if(resume.length > 0) {
        this.resume = resume[0];
      }
    })
  }

  onSaveResume(resume: Resume) {
    this.loading = true;
    this.resumeService.updateResume(resume).subscribe(() => {
      this.loading = false;
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    });
  }

  onSaveWork(work: Work, index: number) {
    this.resume.work[index] = work;
    this.onSaveResume(this.resume);
  }

  onDeleteWork(index: number) {
    this.resume.work.splice(index, 1)
    this.onSaveResume(this.resume);
  }

  onSaveBasics(data: any) {
    this.resume.basics = data.basics;
    this.resume.username = data.username;
    this.onSaveResume(this.resume);
  }

  onSaveEducation(education: Education, index: number) {
    this.resume.education[index] = education;
    this.onSaveResume(this.resume);
  }

  onDeleteEducation(index: number) {
    this.resume.education.splice(index, 1)
    this.onSaveResume(this.resume);
  }

  onSaveSkills(skills: Skill[]) {
    this.resume.skills = skills;
    this.onSaveResume(this.resume);
  }

  addWork() {
    this.resume.work.push(new Work())
  }

  addEducation() {
    this.resume.education.push(new Education())
  }

  ngOnDestroy(): void {
    this.suscriptions.unsubscribe();
  }
}
