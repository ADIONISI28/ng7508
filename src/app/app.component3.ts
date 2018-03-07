
import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  //template: `<h1> Alberto is the best 4<h1>`,
  templateUrl: './app.component.html',  // se fosse / ia ser /src com ./ vai na propria pasta ./app
  
   styles:  [`
  header
  {
    width: 100%;
    text-align: center;
  }
  header h1
  {
    font-size:24px; 
    text-transform: uppercase; 
    letter-spacing:10px; 
    color:white; 
  }

  section img
  {
    border:4px solid red;
  }
  `] 
})

export class AppComponent {
  title = "Caelum Pic";
  creditos = "(Valeu Raphael)";
}