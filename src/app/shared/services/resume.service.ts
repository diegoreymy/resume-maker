import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resume } from 'src/app/shared/models/resume.model';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(private http: HttpClient) { }

  getResumes(): Observable<Resume[]> {
    return this.http.get<Resume[]>('http://localhost:3000/resume')
  }

  getResumeByusername(username: string): Observable<Resume[]> {
    return this.http.get<Resume[]>(`http://localhost:3000/resume?username=${username}`)
  }

  getResumeByEmail(email: string): Observable<Resume[]> {
    return this.http.get<Resume[]>(`http://localhost:3000/resume?email=${email}`)
  }

  createResume(resume: Resume) {
    return this.http.post<Resume[]>(`http://localhost:3000/resume/`, resume)
  }

  updateResume(resume: Resume) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<Resume[]>(`http://localhost:3000/resume/${resume.id}`, resume, {headers: headers})
  }

}
