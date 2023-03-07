import {Component, Input, OnInit,Output,EventEmitter} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ArticleModule} from "../models/article.module";

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit{
   @Input() article!:ArticleModule;

    titre!:string;
   prix!:number;

   urlImage!:string;
   iconColor!:string;
   nbreLike!:number;
   comment!:string;
   dispo:boolean=true;
   @Input()  year!:number;
   @Output() info=new EventEmitter<string>();
   constructor() {
   }
   ngOnInit() {
   }
    onLike(){
        if(this.article.iconColor==="#FFF"){
            this.article.iconColor="#FF2749";
            this.article.nbreLike++;
            this.info.emit(this.article.titre);
        }else {
            this.article.iconColor="#FFF";
            this.article.nbreLike--;
        }
    }

}
