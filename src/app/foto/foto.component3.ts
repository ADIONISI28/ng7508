import { Component, Input } from "@angular/core";
@Component ({
    selector: 'foto',
    template: `<img src="{{url}}" alt="{{titulo}}" class="responsive-img"> 
    `
})

export class FotoComponent { 
      @Input() url = ""
      @Input() titulo = ""
    
      }
ng

/* data binding ==> associacao 
  template: `<img src="{{url}}" alt="{{titulo}}" class="responsive-img"> <br>
    {{url}}
    `

*/