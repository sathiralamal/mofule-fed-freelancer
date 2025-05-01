import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';

@Component({
  imports: [RouterModule, HeaderbarComponent, SlidebarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shell';
}
