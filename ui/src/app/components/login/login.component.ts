import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  loginSubscription: Subscription = new Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  ngOnDestroy() {
    if (this.loginSubscription) this.loginSubscription.unsubscribe();
  }

  login() {
    this.loginSubscription = this.authService.login(this.loginForm.value)
    .subscribe(response => {
      console.log(response)
      this.authService.authUser(Object(response)['token'], this.loginForm.value.username);
      // this.router.navigate(['/home']);
    }, err => {
      console.log(err)
    });
  }

}
