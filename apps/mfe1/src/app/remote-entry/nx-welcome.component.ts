import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { EmailComponent } from './email/email.component';

@Component({
  selector: 'app-nx-welcome',
  imports: [CommonModule, MatButtonModule, EmailComponent],
  template: `
    <h1>Remote Application 1 d</h1>
    {{ number }}
    <button (click)="increment()" mat-button>Basic</button>
    <app-email></app-email>
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
