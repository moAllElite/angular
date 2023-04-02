import {Component, Input, NgModule, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {filter, interval, Observable, Subject, take, takeUntil} from "rxjs";
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

  /**
   * Les opérateurs  take()  et  takeUntil()  sont donc les deux à utiliser
   * lorsque vous souscrivez à un Observable dans votre code TypeScript –
   * lorsque vous appelez sa méthode  subscribe()
   */
  ngOnInit(): void {
    this.destroy$=new Subject<boolean>();
    const compteur$=interval(500).pipe(
      map(value => 2*(value+1)),
      take(3),
      takeUntil(this.destroy$),
      tap(console.log)
    ).subscribe({
      next:(v)=>this.seconde=v,
      error:(e)=>console.error(e),
      complete:()=>console.info("complete")
    });
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
  }
  onSubmit(form:NgForm):void {
    const newTitle=this.titleToAdd;
    const newPrice=this.priceToAdd;
    const newComment=this.commentToAdd;
    console.log("new title:"+newTitle);
    console.log("new price :" +newPrice);
    console.log("new comment :"+newComment);
  }


}
