import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Amplify } from '@aws-amplify/core';
import '@angular/compiler';

Amplify.configure({
  Auth: {
      // REQUIRED - Amazon Cognito Region
      region: 'ap-south-1',

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: 'ap-south-1',

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: 'ap-south-1_cxzKH8wzy',

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: '7meh1hl11q03086rlpn67mcfpn',

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: false,

      // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
      authenticationFlowType: 'ALLOW_USER_PASSWORD_AUTH',


       // OPTIONAL - Hosted UI configuration
      oauth: {
          domain: 'my-cdkappui.auth.ap-south-1.amazoncognito.com',
          scope: ['phone', 'email', 'profile', 'openid', 'aws.cognito.signin.user.admin'],
          redirectSignIn: 'http://localhost:4200/home',
          redirectSignOut: 'http://localhost:4200/login',
          responseType: 'code' // or 'token', note that REFRESH token will only be generated when the responseType is code
      }
  }
});

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
