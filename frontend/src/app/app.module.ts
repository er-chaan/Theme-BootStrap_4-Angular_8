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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
