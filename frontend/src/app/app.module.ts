import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentComponent, FooterComponent, HeaderComponent, NavigationComponent, 
  SidebarComponent } from './components/layout';
import { Dashboard1Component, Dashboard2Component } from './components/pages';
import { Error404Component, Error500Component, RegisterComponent, LockscreenComponent, 
        LoginComponent, ProfileComponent, InvoiceComponent, InvoicePrintComponent, BlankComponent, PaceComponent} from './components/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    SidebarComponent,
    Dashboard1Component,
    Dashboard2Component,
    Error404Component,
    Error500Component,
    RegisterComponent,
    LockscreenComponent,
    LoginComponent,
    ProfileComponent,
    InvoiceComponent,
    BlankComponent,
    PaceComponent,
    InvoicePrintComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
