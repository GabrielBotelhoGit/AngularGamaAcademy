import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroService } from './services/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  login: string = "";
  senha: string = "";
  senhaConfirmada: string = "";
  nome: string = "";
  cpf: string = "";

  erroNoCadastro: boolean = false;
  senhaDiferente: boolean = false;
  estaCarregando: boolean = false;

  constructor(
    private cadastroService: CadastroService,
    private router: Router    
    ) { }

    ngOnInit(): void {      
    }
  
    onCadastro(form: NgForm){  
      this.erroNoCadastro = false;
      this.estaCarregando = true;
      if(form.valid && this.senha == this.senhaConfirmada){
        this.cadastroService.cadastrar({
          "cpf": this.cpf,
          "login": this.login,
          "nome": this.nome,
          "senha": this.senha
        })
          .subscribe(
            () => this.onSuccessLogin(),
            error => this.onErrorLogin(error)
          );
      }
      else{      
        form.controls.usuario.markAsTouched();
        form.controls.senha.markAsTouched();
        form.controls.nome.markAsTouched();
        form.controls.cpf.markAsTouched();
        if(this.senha != this.senhaConfirmada){
          this.senhaDiferente = true;
        }
        this.estaCarregando = false;
      }
    }
  
    onSuccessLogin(){    
      this.router.navigate(["/home"]);
    }
  
    onErrorLogin(error: any){
      console.log(error);
      this.erroNoCadastro = true;
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
