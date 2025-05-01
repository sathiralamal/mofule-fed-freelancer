import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
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

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}
@Component({
  imports: [
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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'shell';

  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 20, color: 'lightblue' },
    { text: 'Three', cols: 37, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 37, rows: 19, color: '#DDBDF1' },
  ];
}
