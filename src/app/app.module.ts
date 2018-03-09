import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { FotoModule} from "./foto/foto.module"
import { CardModule } from "./card/card.module";
import { ListagemComponent } from './listagem/listagem.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { roteamento } from "./app.routes";
import { FotoService } from "./servicos/foto.service";

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent,
    CadastroComponent
  ],
  imports: [
    BrowserModule, HttpClientModule,FormsModule, FotoModule,CardModule,roteamento
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
