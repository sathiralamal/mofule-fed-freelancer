import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatButtonModule],
  template: `
    <h1>Remote Application 1</h1>
    {{ number }}
    <button (click)="increment()" mat-button>Basic</button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None,
})
export class NxWelcomeComponent {
  number = Math.floor(Math.random() * 100);
  increment() {
    this.number++;
  }
}
