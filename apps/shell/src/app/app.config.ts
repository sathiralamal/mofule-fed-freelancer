import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideAuth0 } from '@auth0/auth0-angular';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideAuth0({
      domain: 'dev-zy33i4aii5iigfaf.us.auth0.com',
      clientId: '4nrO3J2QxhaFaRVJBYlGTPyuNy8ONi1G',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
