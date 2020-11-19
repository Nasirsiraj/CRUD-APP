import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {User} from '../../../model/user.model';
import {AuthenticationService} from '../../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }
  public user !: User;
  public loginForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    password: ['', [Validators.required]]
  });
  get name(){
    return this.loginForm.get('name');
  }
  get password(){
    return this.loginForm.get('password');
  }
  getLogin(): void{
    this.user = this.loginForm.value;
    this.loginForm.reset();
    this.authenticationService.authenticate(this.user.name, this.user.password);
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
  }
}
