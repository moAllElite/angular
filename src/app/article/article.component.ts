import {Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
    @Input() idArticle!:number;
    @Input() titreArticle!:string;
    @Input() prixArticle!:number;
    @Input() nbreLikeArticle!:number;
    @Input() urlImageArticle!:string;
    @Input() commentArticle!:string;
    @Input() dispo!:boolean;
    jaime:boolean=true;
   @Input() iconColor!:string;
   @Output() info=new EventEmitter<string>();
   constructor() {
   }
   ngOnInit() {
   }
    onLike(){
        if(this.jaime===true){
            this.jaime=false;
            this.nbreLikeArticle++;
            this.info.emit(this.titreArticle);
        }else {
            this.jaime=true;
            this.nbreLikeArticle--;
            this.info.emit("");
        }
    }
    getColor(){
       if(this.dispo===true){
           return  'green';
       }else {
            return    'red';
       }
    }

}
