import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatChipsModule } from '@angular/material/chips';
import { MatMenuModule } from '@angular/material/menu';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-headerbar',
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatMenuModule,
  ],
  templateUrl: './headerbar.component.html',
  styleUrl: './headerbar.component.css',
})
export class HeaderbarComponent implements OnInit {
  authService = inject(AuthService);
  userName: string = '';
  userEmail: string = '';
  userPicture: string = '';
  profileLoaded: boolean = false;

  ngOnInit() {
    console.log('UserProfileComponent initialized');
    this.authService.user$.subscribe((user) => {
      console.log('User Profile:', user);
      if (user) {
        this.userName = user.name || '';
        this.userEmail = user.email || '';
        this.userPicture = user.picture || '';
        this.profileLoaded = true;
      }
    });
  }
}
