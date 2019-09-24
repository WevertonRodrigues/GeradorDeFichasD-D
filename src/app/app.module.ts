import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudEntrarComponent } from './components/crud-entrar/app.crud-entrar-component';
import { IndexComponent} from './components/index/app.index-component';
import { PerfilComponent } from './components/perfil/app.perfil-component';
import { ListagemFichasComponent } from './components/listagem-fichas/app.listagem-fichas-component';
import { AlterarDadosComponent } from './components/alterar-dados/app.alterar-dados-component';
import { FichaComponent } from './components/ficha/app.ficha-component';
import { FormEntrarComponent } from './components/form-entrar/app.form-entrar-component';
import { FormCadastroComponent } from './components/form-cadastro/app.form-cadastro-component';

const appRoutes: Routes = [
  { path: '', component: IndexComponent},
  { path: 'index', component: IndexComponent},
  { path: 'login', component: CrudEntrarComponent},
  { path: 'perfil/:idPerfil', component: PerfilComponent},
  { path: 'ficha/:idPerfil/:idFicha', component: FichaComponent}
];

@NgModule({
  declarations: [
    AppComponent, CrudEntrarComponent, IndexComponent, PerfilComponent, ListagemFichasComponent,  AlterarDadosComponent, FichaComponent, FormEntrarComponent, FormCadastroComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    ),
    BrowserModule,    
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
