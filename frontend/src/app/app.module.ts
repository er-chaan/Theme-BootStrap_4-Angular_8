import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
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
import { InvoicePrintComponent } from './components/common/invoice-print/invoice-print.component';

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
