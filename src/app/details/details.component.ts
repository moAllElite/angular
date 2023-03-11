import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
   id!:number;
  @Input()  titre!:string;
  @Input()  prix!:number;
  @Input()comment!:string;
  urlImage!:string;
  constructor(private  route:ActivatedRoute,
              private dataService:DataService
              ) {
  }

  ngOnInit(): void {
    /*on récupère l'ensemble des fonction de ativate route parmi elle on appel snapshot
    * et pour récuperer le param id
    * l'id depuis la route présent dans le paramètre
    */
    const id=this.route.snapshot.params["id"];
    this.id=id;
    // @ts-ignore
    this.titre=this.dataService.getArticle(id).titreArticle;
    // @ts-ignore
    this.comment=this.dataService.getArticle(id).commentArticle;
    // @ts-ignore
    this.prix=this.dataService.getArticle(id).prixArticle;
    // @ts-ignore
    this.urlImage=this.dataService.getArticle(id).urlImageArticle;
  }

}
