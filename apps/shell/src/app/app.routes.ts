import { Route } from '@angular/router';
// import { DashbordComponent } from './views/dashbord/dashbord.component';
import { AppComponent } from './app.component';
import { DashbordComponent } from './views/dashbord/dashbord.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { AuthGuard } from '@auth0/auth0-angular';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';

export const appRoutes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
    ],
  },
  {
    path: 'app',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: DashbordComponent },
      {
        path: 'mfe2',
        loadChildren: () => import('mfe2/Routes').then((m) => m!.remoteRoutes),
      },
      {
        path: 'mfe1',
        loadChildren: () => import('mfe1/Routes').then((m) => m!.remoteRoutes),
      },
    ],
  },
];
