import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { faBriefcase, faAddressCard, faDumbbell, faUserGraduate, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

    icons = {
    addressCard: faAddressCard,
    userGraduate: faUserGraduate,
    dumbbell: faDumbbell,
    briefcase: faBriefcase,
    userCircle: faUserCircle,
  };

  ngOnInit(): void {
  }

  signOut() {
    this.authenticationService.signOut();
  }
}
