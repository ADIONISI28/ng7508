import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import { FotoService } from "../servicos/foto.service";

@Component({
  selector: 'listagem',
  //template: `  <p> listagem Works!</p>`,
  templateUrl: "./listagem.component.html",
  styles: []
})
export class ListagemComponent implements OnInit {
  

  title = "Caelum Pic ";
  creditos = "(Alberto Dionisi)";
  listaFotos: FotoComponent[]
  mensagem 
  constructor(private servico:FotoService) {
         this.servico.listar()
        .subscribe( fotosApi =>  this.listaFotos = fotosApi
          // console.log(fotosApi)
        , erro =>  console.log(erro)
      )
    }
  ngOnInit() {
  }
  deletar(foto:FotoComponent){
    console.log(foto);
    this.servico.deletar(foto).subscribe(
         resposta =>{ console.log(resposta) 
         console.log(`${foto.titulo} deletada com sucesso!!`)
         // deletar matriz this.listaFoto = 
         /* this.listaFotos.filter(function(fotoDaLista){
            if(fotoDaLista != foto) { return fotoDaLista }
         }) */
         this.mensagem = `Foto ${foto.titulo} apagada com sucesso`
         this.listaFotos=this.listaFotos.filter(fotoDaLista => fotoDaLista  !=foto )
         setTimeout(()=>this.mensagem = '', 1000)
         // refaz a matriz listaFotos ignorando a foto
         }
        ,erro => console.log(erro)
    )
  }
}