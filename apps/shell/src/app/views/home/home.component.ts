import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderbarComponent } from '../../components/headerbar/headerbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { SlidebarComponent } from '../../components/slidebar/slidebar.component';
import { LoginComponent } from '../login/login.component';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    RouterModule,
    HeaderbarComponent,
    MatGridListModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SlidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  isAuthenticated = false;
  authService = inject(AuthService);

  ngOnInit() {
    console.log('Home initialized');
  }
}
