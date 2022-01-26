import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailConfirmComponent } from './layout/email-confirm/email-confirm.component';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { LikesComponent } from './layout/likes/likes.component';
import { LoginComponent } from './layout/login/login.component';
import { PostsComponent } from './layout/posts/posts.component';
import { ProfileComponent } from './layout/profile/profile.component';
import { RegistrationComponent } from './layout/registration/registration.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { UpdateComponent } from './layout/update/update.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: ':id/posts',
    component: PostsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: ':id/likes',
    component: LikesComponent 
  },
  {
    path: 'likes',
    component: LikesComponent
  },
  {
    path: ':id/update',
    component: UpdateComponent
  },
  {
    path: 'settings',
    component: SettingsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'confirmation',
    component: EmailConfirmComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
