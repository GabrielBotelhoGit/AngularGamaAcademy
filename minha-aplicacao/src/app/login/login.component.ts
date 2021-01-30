import { formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from './login.interface';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild("usuarioInput") usuarioInput : ElementRef | undefined;

  login: string = "";
  senha: string = "";
  erroNoLogin: boolean = false;
  estaCarregando: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router    
    ) { }

  ngOnInit(): void {
    this.loginService.limparSessao();
  }

  onLogin(form: NgForm){  
    this.erroNoLogin = false;
    this.estaCarregando = true;
    if(form.valid){
      this.loginService.logar({
        usuario: this.login,
        senha: this.senha
      })
        .subscribe(
          response => this.onSuccessLogin(response),
          error => this.onErrorLogin(error)
        );
    }
    else{      
      form.controls.usuario.markAsTouched();
      form.controls.senha.markAsTouched();
      this.estaCarregando = false;
    }
  }

  onSuccessLogin(response: LoginResponse){    
    this.router.navigate(["/home"]);
  }

  onErrorLogin(error: any){
    console.log(error);
    this.erroNoLogin = true;
    this.estaCarregando = false;
  }



  exibeErro(form: NgForm, nomeInput: string){
    if(!form.controls[nomeInput]){
      return false;
    }
    else{
      if(form.controls[nomeInput].invalid && form.controls[nomeInput].touched){
        return true;
      }
      else{
        return false;
      }
    }
  }

}
