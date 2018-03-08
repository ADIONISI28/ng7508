import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'listagem',
  //template: `  <p> listagem Works!</p>`,
  templateUrl: "./listagem.component.html",
  styles: []
})
export class ListagemComponent implements OnInit {
  

  title = "Caelum Pic ";
  creditos = "(Alberto Dionisi)";
  listaFotos 
  constructor(conexaoApi: HttpClient) {
    conexaoApi.get("http://localhost:3000/v1/fotos")
        .subscribe( fotosApi =>  this.listaFotos = fotosApi
          // console.log(fotosApi)
        , erro =>  console.log(erro)
      )
    }
  ngOnInit() {
  }

}
