import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component'
import { Dashboard1Component } from './components/pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './components/pages/dashboard2/dashboard2.component';
import { Error404Component } from './components/common/error404/error404.component';
import { Error500Component } from './components/common/error500/error500.component';

const routes: Routes = [
  { path: ' ', component: AppComponent },
  { path: 'Dashboard1Component', component: Dashboard1Component },
  { path: 'Dashboard2Component', component: Dashboard2Component },
  { path: 'Error404Component', component: Error404Component },
  { path: 'Error500Component', component: Error500Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
