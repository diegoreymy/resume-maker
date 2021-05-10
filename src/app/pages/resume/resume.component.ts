import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Resume } from 'src/app/shared/models/resume.model';
import { ResumeService } from 'src/app/shared/services/resume.service';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  username: string = "";
  resume: Resume = new Resume();
  icons = {
    github: faGithub,
    linkedin: faLinkedinIn,
    envelope: faEnvelope,
    mobile: faMobile,
  };

  constructor(
    private resumeService: ResumeService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    this.username = this.route.snapshot.paramMap.get('username') || '';
    this.getResumeByusername(this.username);
   }

  ngOnInit(): void {
  }

  getResumeByusername(username: string) {
    this.resumeService.getResumeByusername(username).subscribe((resume: Resume[]) => {
      if (resume.length !== 0) {
        this.resume = resume[0];
      } else {
        this.router.navigate(['error']);
      }
    })
  }

}
