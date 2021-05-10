import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { faBriefcase, faAddressCard, faDumbbell, faUserGraduate, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { Observable, Subscription } from 'rxjs';
import { ResumeService } from 'src/app/shared/services/resume.service';
import { Resume } from 'src/app/shared/models/resume.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  currentEmailUser$ = new Observable;
  suscriptions = new Subscription();
  resume: Resume =  new Resume();
  loading: boolean = false;

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
      this.resume = resume[0];
    })
  }

  onSaveResume(resume: Resume) {
    this.loading = true;
    this.resumeService.updateResume(resume).subscribe(() => {
      this.loading = false;
    });
  }

  ngOnDestroy(): void {
    this.suscriptions.unsubscribe();
  }
}
