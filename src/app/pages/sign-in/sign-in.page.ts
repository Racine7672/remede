import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from 'firebase/auth';
import { RemedeServiceService } from 'src/app/services/remede-service.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  private auth = getAuth();
  constructor(
    private appService: RemedeServiceService,
    private router: Router
    ) {}

  ngOnInit() {
  }

  public async signWithGoogle(){
    await this.appService.signWithGoogle();
  }

  public signInWithPhone(){
    this.router.navigateByUrl('/sign-up');
  }

}
