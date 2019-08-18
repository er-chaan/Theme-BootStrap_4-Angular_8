import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { NavigationComponent } from './components/layout/navigation/navigation.component';
import { ContentComponent } from './components/layout/content/content.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
    SidebarComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
