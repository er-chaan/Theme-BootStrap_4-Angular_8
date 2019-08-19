import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { Dashboard1Component, Dashboard2Component } from './components/pages';
import { Error404Component, Error500Component, RegisterComponent, LockscreenComponent, 
        LoginComponent, ProfileComponent, InvoiceComponent, InvoicePrintComponent, BlankComponent, PaceComponent} from './components/common';

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
