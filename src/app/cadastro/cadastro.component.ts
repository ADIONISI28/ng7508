import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoComponent } from "../foto/foto.component";
import { FotoService } from "../servicos/foto.service";

@Component({
  selector: 'cadastro',
  //template: ` <p>cadastro Works!</p>`,
  templateUrl: "./cadastro.component.html",
  styles: []
})
  export class CadastroComponent implements OnInit {

    foto = new FotoComponent()  
    servico: FotoService

    constructor(service: FotoService) {
        this.servico = service     
    }

    ngOnInit() { }

  //  salvar(evento:Event) {
    salvar() {
    
      // evento.preventDefault()
        console.log("Salvou")
        console.log(this.foto)
      

    //  let cabecalho = new HttpHeaders()
    //  cabecalho.append('Content-Type','application/json')
      
      this.servico.cadastrar(this.foto)  
        .subscribe( ()=> this.foto = new FotoComponent()
                , erro => console.log(erro)
      )
    }
  }
