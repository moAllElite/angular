import { Component ,OnInit} from '@angular/core';
import {FaceSnapModule} from "./models/face-snap/face-snap.module";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  mySnap!:FaceSnapModule
  ngOnInit(){
    this.mySnap = new FaceSnapModule(
        'Archibald',
        'Mon meilleur ami depuis tout petit !',
        './assets/images/img1.jpg',
        0
    )
  }



}
