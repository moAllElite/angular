import { Component,OnInit } from '@angular/core';
import {NgForm,FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-reactif',
  templateUrl: './add-reactif.component.html',
  styleUrls: ['./add-reactif.component.css']
})
export class AddReactifComponent implements OnInit{
  titleToAdd=new FormControl('');
  priceToAdd=new FormControl('');
  ngOnInit(): void {
  }
  onEnvoyer(form:NgForm):void{
    const title=this.titleToAdd.value;
    const price=this.priceToAdd.value;
    console.log("new title:" +title);
    console.log("new price:" +price);
  }
}
