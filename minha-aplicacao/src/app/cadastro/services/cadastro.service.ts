import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/login/login.service';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { environment } from '../../../environments/environment';
import { mergeMap } from 'rxjs/operators';

import { CadastroCredencials } from '../cadastro.interface';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private loginService: LoginService
    ) { }
    
  cadastrar(credenciais: CadastroCredencials){    
    return this.http.post(environment.baseUrl + "/usuarios", credenciais)
      .pipe(
        mergeMap(() => {
          return this.loginService.logar({
            usuario: credenciais.login,
            senha: credenciais.senha
          })
        })
      );    
  }
}