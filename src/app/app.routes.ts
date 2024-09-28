import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './forms/user-registration/user-registration.component';
import { UserProfileFormComponent } from './forms/user-profile-form/user-profile-form.component';

export const routes: Routes = [
    {path: 'register', component: UserRegistrationComponent},
    {path: 'profile', component: UserProfileFormComponent}
];
