import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IResume } from 'src/app/shared/models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  getResumes(): Observable<IResume[]> {
    return this.http.get<IResume[]>('http://localhost:3000/resume')
  }

  getResumeByNickname(nickname: string): Observable<IResume[]> {
    return this.http.get<IResume[]>(`http://localhost:3000/resume?nickname=${nickname}`)
  }
}
