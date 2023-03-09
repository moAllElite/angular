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
  creatDate:Date=new Date();
  message:string="";
 // myArticle!:ArticleModule

  ngOnInit(){
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

}
