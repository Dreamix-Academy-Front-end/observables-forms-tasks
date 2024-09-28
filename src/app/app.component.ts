import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NumberEmitterComponent } from "./observables/number-emitter/number-emitter.component";
import { FetchDataComponent } from './observables/fetch-data/fetch-data/fetch-data.component';
import { UserRegistrationComponent } from "./forms/user-registration/user-registration.component";
import { PhoneFormComponent } from './forms/phone-form/phone-form.component';
import { ConfirmPasswordFormComponent } from './forms/confirm-password-form/confirm-password-form.component';
import { UserFormComponent } from './combined-tasks/user-form/user-form.component';
import { AutoSaveFormComponent } from './combined-tasks/auto-save-form/auto-save-form.component';
import { RealTimeSearchFormComponent } from './combined-tasks/real-time-search-form/real-time-search-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: 
  [
    RouterOutlet, 
    NumberEmitterComponent, 
    FetchDataComponent, 
    UserRegistrationComponent, 
    RouterLink,
    PhoneFormComponent,
    ConfirmPasswordFormComponent,
    UserFormComponent,
    AutoSaveFormComponent,
    RealTimeSearchFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'observables-tasks';

  constructor(private router: Router) {}
  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }
}
