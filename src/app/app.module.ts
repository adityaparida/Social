import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProfileComponent } from './layout/profile/profile.component';
import { RegistrationComponent } from './layout/registration/registration.component';
import { PostsComponent } from './layout/posts/posts.component';
import { LikesComponent } from './layout/likes/likes.component';
import { TopnavComponent } from './layout/navigation/topnav/topnav.component';
import { UpdateComponent } from './layout/update/update.component';
import { SettingsComponent } from './layout/settings/settings.component';
import { LoginComponent } from './layout/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmailConfirmComponent } from './layout/email-confirm/email-confirm.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatNativeDateModule } from '@angular/material/core';
import { ForgotPasswordComponent } from './layout/forgot-password/forgot-password.component';
import { MatCardModule } from '@angular/material/card';
import { NgOtpInputModule } from 'ng-otp-input';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    RegistrationComponent,
    PostsComponent,
    LikesComponent,
    TopnavComponent,
    UpdateComponent,
    SettingsComponent,
    LoginComponent,
    EmailConfirmComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatCardModule,
    NgbModule,
    NgOtpInputModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
