import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FotoModule} from "./foto/foto.module"
import { CardModule } from "./card/card.module";
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { roteamento } from "./app.routes";

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FotoModule,CardModule,roteamento
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
