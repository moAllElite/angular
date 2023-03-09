import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapModule} from "./models/face-snap.module";
import {ArticleModule} from "./models/article.module";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  mySnap!:FaceSnapModule
  year1:number=Date.now();
  message:string="";
 // myArticle!:ArticleModule

  ngOnInit(){
    /*this.mySnap = new FaceSnapModule(
        'Mo',
        'Mon meilleur ami depuis tout petit !',
        './assets/images/img1.jpg',
        0
    )*/
    /*this.myArticle=new ArticleModule(
        'iphone 14',
        15,
        '#FFF',
        "../../assets/images/img2.jpg",
        0,
        'alabama'
    )
  */
  }
  onAffiche(arg:string){
    return this.message="Merci d'avoir acheter :"+arg;
  }
  getVisible(){
    if(this.onAffiche!=null){
      return 'visible';
    }else {
      return  'hidden';
    }
  }
  items=[
    {
      titreArticle:"iphone",
      prixArticle:15,
      urlImageArticle:"../../assets/images/img5.jpg",
      nbreLikeArticle:0,
      commentArticle:'fun',
      dispo:false,
      iconColor:"#FFF"
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

}
