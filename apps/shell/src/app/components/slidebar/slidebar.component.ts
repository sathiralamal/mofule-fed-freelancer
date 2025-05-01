import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { UserprofileComponent } from "../userprofile/userprofile.component";
@Component({
  selector: 'app-slidebar',
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    UserprofileComponent
],
  // imports: [CommonModule],

  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css',
})
export class SlidebarComponent {
  private readonly router = inject(Router);
  showSettings: boolean = false;

 
  public onSlidebarItemClick(navigate: string) {
    console.log(`Slidebar item clicked`);
    this.router.navigate(['/' + navigate]);
  }

  public onSettingsClick() {
    this.showSettings = !this.showSettings;
  }
}
