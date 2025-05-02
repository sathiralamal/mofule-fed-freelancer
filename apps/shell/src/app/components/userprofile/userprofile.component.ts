import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '@auth0/auth0-angular';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-userprofile',
  imports: [
    CommonModule,
    MatButtonModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css',
})
export class UserprofileComponent implements OnInit {
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

  logout() {
    this.authService.logout();
  }
}
