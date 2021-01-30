import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import localePT from '@angular/common/locales/pt';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomeComponent } from './area-logada/home/home.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ExercicioDataBindingComponent } from './shared/exercicio-data-binding/exercicio-data-binding.component';
import { ContadorComponent } from './shared/contador/contador.component';
import { ExercicioDiretivasComponent } from './shared/exercicio-diretivas/exercicio-diretivas.component';
import { ExercicioPipesComponent } from './shared/exercicio-pipes/exercicio-pipes.component';
import { MeuPipePipe } from './shared/meu-pipe.pipe';
import { registerLocaleData } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PlanosContaComponent } from './area-logada/planos-conta/planos-conta.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LancamentosComponent } from './area-logada/lancamentos/lancamentos.component';
import { AreaLogadaComponent } from './area-logada/area-logada.component';
import { Erro404Component } from './erro404/erro404.component';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExercicioDataBindingComponent,
    ContadorComponent,
    ExercicioDiretivasComponent,
    ExercicioPipesComponent,
    MeuPipePipe,
    LoginComponent,
    PlanosContaComponent,
    CadastroComponent,
    LancamentosComponent,
    AreaLogadaComponent,
    Erro404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide:LOCALE_ID,
    useValue: 'pt'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
