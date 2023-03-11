import { Component ,NgModule,OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit{
  titleToAdd='';
  priceToAdd='';
  commentToAdd='';
  ngOnInit(): void {
  }

  onSubmit(form:NgForm) {
    const newTitle=this.titleToAdd;
    const newPrice=this.priceToAdd;
    const newComment=this.commentToAdd;
    console.log("new title:"+newTitle);
    console.log("new price :" +newPrice);
    console.log("new comment :"+newComment);
  }
}
