import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapModule} from "../models/face-snap.module";

@Component({
  selector: 'app-snap',
  templateUrl: './snap.component.html',
  styleUrls: ['./snap.component.css']
})
export class SnapComponent implements OnInit{
  @Input() snapVvs!:FaceSnapModule;
  title?:string;
  description?:string;
  imageUrl?:string;
  snap!:number;
  buttonText!:string
  ngOnInit() {
    this.buttonText="snap";
  }
  onSnap(){
    if (this.buttonText==="snap") {
      this.snapVvs.snap++;
      this.buttonText = "oops snap";

    }else {
      this.snapVvs.snap--;
      this.buttonText="snap";
    }
  }
}
