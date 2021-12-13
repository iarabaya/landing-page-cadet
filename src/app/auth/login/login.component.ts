import { Component } from '@angular/core';
import { FormGroup, FormControl, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../interfaces/user';
import { LoginService } from '../services/login.service';


import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  hide = true;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })

  constructor( private loginService: LoginService, private router: Router){}

  user: User = {
    email: '',
    password: ''
  }

  logIn( formDirective: FormGroupDirective ){
    this.user = this.loginForm.value;

    this.loginService.login(this.user.email, this.user.password).subscribe( res => {
      console.log(res)
      if(res.id){
        localStorage.setItem('email', this.user.email);
        localStorage.setItem('roleId', JSON.stringify(res.rol.id));
        localStorage.setItem('userId', JSON.stringify(res.id));
        this.router.navigateByUrl('dashboard/triplist');
      }
    },
    error => {
      let msj = `${error.error}, status: ${error.status}`
      Swal.fire('Error', msj ,'error');
    })

    formDirective.resetForm();
    this.loginForm.reset();
  }

}
