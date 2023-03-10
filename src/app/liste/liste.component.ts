import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css']
})
export class ListeComponent implements OnInit{

  items:any;
  creatDate:Date=new Date();
  message:string="";
  constructor(private dataService:DataService) {
  }
  ngOnInit(){
    this.items=this.dataService.itemsArticle;
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
}
