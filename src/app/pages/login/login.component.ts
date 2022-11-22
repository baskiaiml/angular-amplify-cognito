
import { Component, OnInit, NgZone } from '@angular/core';
import { Auth, Hub } from 'aws-amplify';
import { Router } from '@angular/router';
import { AmplifyService } from 'aws-amplify-angular'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private amplifyService: AmplifyService,
    private zone: NgZone) {


    // Used for listening to login events
    Hub.listen("auth", ({ payload: { event, data } }) => {
      if (event === "cognitoHostedUI" || event === "signedIn") {
        console.log("--->",event);
        this.zone.run(() => this.router.navigate(['/home']));
      } else {
       
      }
    });

    //currentAuthenticatedUser: when user comes to login page again
    Auth.currentAuthenticatedUser()
      .then(() => {
        this.router.navigate(['/home'], { replaceUrl: true });
      }).catch((err) => {
        console.log(err);
      })

  }

  ngOnInit() { }

  onLoginClick() {
    Auth.federatedSignIn();
  }


  onLoginClickOkta() {
       Auth.federatedSignIn({
      customProvider: 'OktaWebFlow'
    });
  }

}