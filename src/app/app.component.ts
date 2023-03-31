import {Component, Input, OnInit,OnDestroy} from '@angular/core';
import {filter, interval, Observable, Subscription} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,OnDestroy{

  //seconde!:string;
  /**
   * La norme est d'ajouter un  $  à la fin du nom de toute variable qui contient un Observable.
   */
  compteur$!:Observable<number>
  private subscribeCompteur!: Subscription;

  /**
   *
   */
  ngOnInit() :void{
    this.compteur$=interval(1000);

      /*.pipe(filter(value => value % 2===0 ),
              map(value => value % 2 ===0 ?
                   `${value} est pair`:
                    `${value} est impair`
      ));*/
    /*this.subscribeCompteur=compteur$.subscribe({
      next:(s)=>this.seconde=s,
      error:(e)=>console.error(e),
      complete:()=>console.info("complete")
    });*/
  }

  /**
   * au moment de la destruction de mon composant grâce à la méthode unsubscribe
   * quand on n'a plus besoin de l'Observable, car sinon, on court le risque de créer des fuites de mémoire !
   */

  ngOnDestroy():void{
    this.subscribeCompteur.unsubscribe();
  }



}
