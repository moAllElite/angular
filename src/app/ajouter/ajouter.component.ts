import {Component, Input, NgModule, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {filter, interval, Observable, Subject, takeUntil} from "rxjs";
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
  seconde:number=0;
  private destroy$!:Subject<boolean>;
  ngOnInit(): void {
    this.destroy$=new Subject<boolean>();
    const compteur$=interval(1000).pipe(
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe({
      next:(v)=>this.seconde=v,
      error:(e)=>console.error(e),
      complete:()=>console.info("complete")
    });
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
