import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudiesAndCertificationsFormComponent } from './studies-and-certifications-form.component';

describe('StudiesAndCertificationsFormComponent', () => {
  let component: StudiesAndCertificationsFormComponent;
  let fixture: ComponentFixture<StudiesAndCertificationsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudiesAndCertificationsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudiesAndCertificationsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
