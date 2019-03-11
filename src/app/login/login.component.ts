import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroupDirective, NgForm} from '@angular/forms';
import { LoginService } from '../services/login/login.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ErrorStateMatcher } from '@angular/material/core';
import { shake } from 'ngx-animate';
import { trigger, state, style, transition, useAnimation } from '@angular/animations';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('error', [
      state('false, true', style({})),
      transition('false => true', useAnimation(shake)),
      ]),
  ]
})

export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService,
    private router: Router,
    private sharedService: SharedService,
    private snackbar: MatSnackBar) { }

  onAddErrAnim: boolean = false;
  email = new FormControl('', [Validators.required, Validators.email]);
  pass = new FormControl('', [Validators.required]);
  hide = true;
  myParams: object = {};
  myStyle: object = {};
  colorAnimation: object = {};
  width: number = 100;
  height: number = 100;
  data: string;
  res: number;

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  tryLogin(){
    this.onAddErrAnim = false;
    if (!this.email.value || !this.pass.value)
    {
      this.snackbar.open('You must enter an email and a password !', 'OK', { duration: 5000, verticalPosition: 'bottom'});
      this.onAddErrAnim = true;
      return ;
    }
    var datas = {
      email : this.email.value,
      pass : this.pass.value
    }

    this.loginService.getCount(datas)
    .subscribe(res =>
    {
      this.res = res;
      if (res && res['response'] == 1)
      {
        console.log("GAGNE");
        this.sharedService.changeMessage(this.email.value);
        this.router.navigate(['commun-accueil']);
      }
      else if (res['response'] == -1)
      {
        this.onAddErrAnim = true;
        this.snackbar.open('Account not found !', 'OK', { duration: 5000, verticalPosition: 'bottom'});
      }
      else
      {
        this.onAddErrAnim = true;
        this.snackbar.open('Wrong password for this account !', 'OK', { duration: 5000, verticalPosition: 'bottom' });
      }
    });
  }

  matcher = new MyErrorStateMatcher();

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(data => this.data = data);

    this.myStyle = {
      'position': 'fixed',
      'width': '100%',
      'height': '100%',
      'z-index': -1,
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
      'background-color': 'rgb(3, 43, 52)'
    };

    this.myParams = {
      particles: {
          number: {
              value: 80,
          },
          color: {
              value: '#f0d36e'
          },
          shape: {
              type: 'circle',
              polygon: {
                nb_sides: 3
              }
          },
          size: {
            value: 2,
            random: true,
            anim: {
              enable: false,
              speed: 40,
              size_min: 0.1,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: '#ffffff',
            opacity: 0.4,
            width: 1
          },
          move: {
            enable: true,
            speed: 0.2,
            direction: 'top',
            random: false,
            straight: false,
            out_mode: 'out',
          }
        },
        interactivity:
        {
          modes: {
            grab: {
              distance: 180,
              line_linked: {
                opacity: 0.4
              }
            },
            push: {
              particles_nb: 4
            }
          }
        },
    };
  }

}
