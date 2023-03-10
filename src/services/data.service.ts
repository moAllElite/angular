import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  itemsArticle=[
    {
      titreArticle:"iphone",
      prixArticle:15,
      urlImageArticle:"../../assets/images/img5.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:false,
      iconColor:"#ff2749"
    },
    {
      titreArticle:"TV",
      prixArticle:250.99,
      urlImageArticle:"../../assets/images/img2.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:false,
      iconColor:"#FFF"
    },
    {
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
}
