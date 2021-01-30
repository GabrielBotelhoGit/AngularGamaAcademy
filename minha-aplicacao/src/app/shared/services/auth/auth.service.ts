import { Injectable } from '@angular/core';
import { Usuario } from '../../usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario : Usuario | undefined;
  token: string | undefined;

  constructor() { 
    if(!this.usuario && localStorage.getItem("usuario")){              
      this.usuario = localStorage.getItem("usuario") ? JSON.parse(localStorage.getItem("usuario")!) : undefined;       
    }
    if(!this.token && localStorage.getItem("token")){
      this.token = localStorage.getItem("token") ? localStorage.getItem("token")! : undefined; 
    }
  }

  setUsuario(usuario: Usuario){
    this.usuario = usuario;
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }

  setToken(token: string){
    this.token = token;
    localStorage.setItem("token", token);
  }

  getUsuario(){
    return this.usuario;
  }

  getToken(){
    return this.token;
  }

  clearSession() {
    this.usuario = undefined;
    this.token = undefined;
    localStorage.clear();
  }

  estaLogado(){
    let retorno = false;
    if(this.usuario && this.token){
      retorno = true;
    }
    return retorno;
  }
}
