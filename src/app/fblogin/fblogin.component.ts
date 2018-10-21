import { Component } from '@angular/core';
import { AuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { AuthService as SocialAuthService, FacebookLoginProvider} from 'angularx-social-login';

@Component({
  selector: 'app-fblogin',
  templateUrl: './fblogin.component.html',
  styleUrls: ['./fblogin.component.css']
})
export class FbloginComponent {
  title = 'deneme';
  user: SocialUser;
  private loggedIn: boolean;
  pic: String;

  constructor(private authService: AuthService,
              private socialAuthService: SocialAuthService ) {}

  public facebookLogin() {
    const socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        // this will return user data from facebook. What you need is a user token which you will send it to the server
        // this.sendToRestApiMethod(userData.token);
        console.log(userData.authToken);
        console.log(userData.email);
        console.log(userData.facebook);
        console.log(userData.firstName);
        console.log(userData.id);
        console.log(userData.idToken);
        console.log(userData.lastName);
        console.log(userData.name);
        console.log(userData.photoUrl);
        this.user = userData;
      }
    );
  }
  public facebookLogout() {
    this.socialAuthService.signOut().then(
      (userData) => {
        this.user = null;
      }
    );
  }

}
