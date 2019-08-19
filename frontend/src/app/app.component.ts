import { Component } from '@angular/core';
import { ContentComponent, FooterComponent, HeaderComponent, NavigationComponent, 
        SidebarComponent } from './components/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'frontend';
}