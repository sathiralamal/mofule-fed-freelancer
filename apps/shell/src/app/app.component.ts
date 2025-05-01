import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { HeaderbarComponent } from './components/headerbar/headerbar.component';
import { SlidebarComponent } from './components/slidebar/slidebar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
// Angular Material Imports
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { LoginComponent } from './views/login/login.component';
import { AuthService } from '@auth0/auth0-angular';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './views/home/home.component';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  imports: [
    RouterModule,
    // MatGridListModule,
    // MatSidenavModule,
    // MatButtonModule,
    // MatListModule,
    // MatSidenavModule,
    // MatIconModule,
    // MatButtonModule,
    // MatDividerModule,
    // MatFormFieldModule,
    // MatInputModule,
    // MatSelectModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    CommonModule,
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  title = 'shell';
  isAuthenticated = false;
  authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    console.log('AppComponent initialized');

    this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        console.log('Is Authenticated:', isAuthenticated);
        if (isAuthenticated) {
          this.router.navigate(['/home']);
        } else {
          this.router.navigate(['/login']);
        }
      },
      (error) => {
        console.error('Error checking authentication:', error);
        // Handle error if needed
      }
    );
    // if (true) {
    //   this.router.navigate(['/home']);
    // } else {
    //   this.router.navigate(['/login']);
    // }
  }
}
