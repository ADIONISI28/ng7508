import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FotoComponent } from "../foto/foto.component";

@Component({
  selector: 'cadastro',
  //template: ` <p>cadastro Works!</p>`,
  templateUrl: "./cadastro.component.html",
  styles: []
})
  export class CadastroComponent implements OnInit {

    foto = new FotoComponent()  

    constructor(private conexaoApi: HttpClient) { }

    ngOnInit() { }

  //  salvar(evento:Event) {
    salvar() {
    
      // evento.preventDefault()
        console.log("Salvou")
        console.log(this.foto)
      

      let cabecalho = new HttpHeaders()
      cabecalho.append('Content-Type','application/json')
      
      this.conexaoApi.post('http://localhost:3000/v1/fotos',
      this.foto, {headers: cabecalho }
    ) 
    .subscribe( resposta => {console.log(resposta)
        }, erro => console.log(erro)
      )
    }
  }
