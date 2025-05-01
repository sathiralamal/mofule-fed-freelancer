import { Route } from '@angular/router';
import { RemoteEntryComponent } from './entry.component';
import { EmailComponent } from './email/email.component';

export const remoteRoutes: Route[] = [
  { path: '', component: RemoteEntryComponent },
  { path: 'email', component: EmailComponent },
];
