import { Injectable } from '@angular/core';
import { LoginCredentials, LoginResponse } from './login.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../shared/services/auth/auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }

  logar(credenciais: LoginCredentials) :Observable<LoginResponse>{
    return this.http.post<LoginResponse>(environment.baseUrl + "/login", credenciais)
      .pipe(
        tap(response => {
          this.authService.setUsuario(response.usuario);
          this.authService.setToken(response.token);
        })
      );
  }

  limparSessao(){
    this.authService.clearSession();
  }
}
