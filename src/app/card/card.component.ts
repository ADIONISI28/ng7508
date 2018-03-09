import { Component, Input } from "@angular/core";


@Component({
    selector: "card",
    templateUrl : "./card.component.html",
    styles: [
        `.card-title {
            font-size:1em;
        }`
    ]
})
export class CardComponent { 
    @Input() titulo : string
}