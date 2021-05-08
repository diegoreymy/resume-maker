import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IResume } from 'src/app/shared/models/resume.model';
import { ResumeService } from 'src/app/shared/services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  nickname: string = "";

  constructor(
    private resumeService: ResumeService,
    private route: ActivatedRoute
  ) {
    this.nickname = this.route.snapshot.paramMap.get('nickname') || '';
    this.getResumeByNickname(this.nickname);
   }

  ngOnInit(): void {
  }

  getResumeByNickname(nickname: string) {
    this.resumeService.getResumeByNickname(nickname).subscribe((resumes: IResume) => {
      console.log(resumes)
    })
  }

}
