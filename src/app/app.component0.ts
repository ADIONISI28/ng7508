
import { Component } from '@angular/core'
@Component({
  selector: 'app-root',
  //template: `<h1> Alberto is the best 4<h1>`,
  templateUrl: './app.component.html',  // se fosse / ia ser /src com ./ vai na propria pasta ./app
  styles: ['h1 {color: red }']
})

export class AppComponent {
  title = "Caelum Pic";
}