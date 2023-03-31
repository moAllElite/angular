import {Component, Input, NgModule, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {interval, Observable, Subject} from "rxjs";
import {map, tap} from "rxjs/operators"

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit,OnDestroy{
  titleToAdd='';
  priceToAdd='';
  commentToAdd='';
  @Input()compteur$!:any;
  private destroy$!:Subject<boolean>;
  ngOnInit(): void {
    this.destroy$=new Subject<boolean>();
    const compteur$=interval(1000).pipe(
      map(value=>value),
      tap(console.log)
    ).subscribe();
  }

  onSubmit(form:NgForm):void {
    const newTitle=this.titleToAdd;
    const newPrice=this.priceToAdd;
    const newComment=this.commentToAdd;
    console.log("new title:"+newTitle);
    console.log("new price :" +newPrice);
    console.log("new comment :"+newComment);
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
}
