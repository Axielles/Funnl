import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LostPasswordComponent } from './lost-password/lost-password.component';
import { HomePageComponent } from './home-page/home-page.component';
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
  { path: 'signInForm', component: SignInComponent },
  { path: 'signUpForm', component: SignUpComponent },
  { path: 'lostPassword', component: LostPasswordComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: '', component: SignInComponent },
  { path: 'not-found', component: Erreur404Component },
  { path: '**', redirectTo: '/not-found' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
