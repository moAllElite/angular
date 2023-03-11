import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsArticle=[
    {
      id:1,
      titreArticle:"iphone",
      prixArticle:15,
      urlImageArticle:"../../assets/images/img5.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:false,
      iconColor:"#ff2749"
    },
    {
      id:2,
      titreArticle:"TV",
      prixArticle:250.99,
      urlImageArticle:"../../assets/images/img2.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:false,
      iconColor:"#FFF"
    },
    {
      id:3,
      titreArticle:"car",
      prixArticle:15000,
      urlImageArticle:"../../assets/images/img4.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:true,
      iconColor:"#FFF"
    }
  ]

  constructor() { }
  /*
    cette fonction récupère un objet dans le tableau selon son id passé en paramètre
   */
 getArticle(id:number){
   const articles=this.itemsArticle.find((a)=>{
     //on retourne l'id item == param id
     return a.id==id;
   })
   return articles;
 }
}
