import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-email',
  imports: [CommonModule],
  templateUrl: './email.component.html',
  styleUrl: './email.component.css',
})
export class EmailComponent implements OnInit {
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
