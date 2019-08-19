import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { Dashboard1Component } from './components/pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './components/pages/dashboard2/dashboard2.component';
import { Error404Component } from './components/common/error404/error404.component';
import { Error500Component } from './components/common/error500/error500.component';
import { RegisterComponent } from './components/common/register/register.component';
import { LockscreenComponent } from './components/common/lockscreen/lockscreen.component';
import { LoginComponent } from './components/common/login/login.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { InvoiceComponent } from './components/common/invoice/invoice.component';
import { BlankComponent } from './components/common/blank/blank.component';
import { PaceComponent } from './components/common/pace/pace.component';

const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'Dashboard1', component: Dashboard1Component },
  { path: 'Dashboard2', component: Dashboard2Component },
  { path: 'Error404', component: Error404Component },
  { path: 'Error500', component: Error500Component },
  { path: 'Register', component: RegisterComponent },
  { path: 'Lockscreen', component: LockscreenComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'Invoice', component: InvoiceComponent },
  { path: 'Blank', component: BlankComponent },
  { path: 'Pace', component: PaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
