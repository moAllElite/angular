import { Component ,OnInit} from '@angular/core';
import {FaceSnapModule} from "./models/face-snap.module";
import {ArticleModule} from "./models/article.module";
import {numbers, strings} from "@material/top-app-bar";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  mySnap!:FaceSnapModule
  year1:number=2020;
  message:string="";
  myArticle!:ArticleModule
  ngOnInit(){
    /*this.mySnap = new FaceSnapModule(
        'Mo',
        'Mon meilleur ami depuis tout petit !',
        './assets/images/img1.jpg',
        0
    )*/
    this.myArticle=new ArticleModule(
        'iphone 14',
        15,
        '#FFF',
        "../../assets/images/img2.jpg",
        0,
        'alabama'
    )

  }
  onAffiche(arg:string){
    return this.message="Merci d'avoir acheter :"+arg.toUpperCase();
  }


}
