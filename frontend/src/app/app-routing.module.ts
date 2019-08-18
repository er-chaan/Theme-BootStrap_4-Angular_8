import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent }
  { path: ' ', component: AppComponent },
  { path: 'dashboard1', component: AppComponent },
  { path: 'dashboard2', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
