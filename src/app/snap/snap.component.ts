import {Component, Input, OnInit} from '@angular/core';
import {FaceSnapModule} from "../models/face-snap/face-snap.module";

@Component({
  selector: 'app-snap',
  templateUrl: './snap.component.html',
  styleUrls: ['./snap.component.css']
})
export class SnapComponent implements OnInit{
  @Input() mysnap!:FaceSnapModule;
  title?:string;
  description?:string;
  imageUrl?:string;
  snap!:number;
  buttonText?:string
  ngOnInit() {/*
    this.title='mo';
    this.description='fu pottere';
    this.imageUrl='./assets/images/img1.jpg';
    this.snap=0;*/
  }
  onSnap(){
    if (this.buttonText==="snap") {
      this.buttonText = "oops snap";
      this.snap++;
    }else {
      this.buttonText=" snap";
      this.snap--;
    }
  }
}
