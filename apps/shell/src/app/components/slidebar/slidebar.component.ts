import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-slidebar',
  imports: [CommonModule],
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css',
})
export class SlidebarComponent {
  private readonly router = inject(Router);

  // You can add methods and properties for the component here
  // For example, a method to handle slidebar item clicks
  public onSlidebarItemClick() {
    console.log(`Slidebar item clicked`);
    this.router.navigate(['/mfe1']);
  }
}
