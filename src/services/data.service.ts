import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsArticle=[
    {
      id:1,
      titreArticle:"iphone",
      prixArticle:150000,
      urlImageArticle:"../../assets/images/img5.jpg",
      nbreLikeArticle:1,
      commentArticle:'fun',
      dispo:false
    },
    {
      id:2,
      titreArticle:"bike ",
      prixArticle:2499999.99,
      urlImageArticle:"../../assets/images/img3.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:false,
    },
    {
      id:3,
      titreArticle:"car",
      prixArticle:15000,
      urlImageArticle:"../../assets/images/img4.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:true
    }
  ]

  constructor() { }
  /*
    cette fonction récupère un objet dans le tableau selon son id passé en paramètre
   */
 getArticle(id:number){
   const articles=this.itemsArticle.find(
     //on retourne l'id item == param id
       a=>a.id==id
   )
   return articles;
 }
}
