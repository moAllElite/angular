import {Component, Input, OnInit,OnDestroy} from '@angular/core';
import {filter, interval, Subscription} from "rxjs";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit,OnDestroy{

  seconde!:string;
  private subscribeCompteur!: Subscription;

  ngOnInit() {
    const compteur=interval(1000).pipe(
      filter(value => value % 2===0 ),
      map(value => value % 2 ===0 ?
        `${value} est pair`:
        `${value} est impair`
      )

    );
    this.subscribeCompteur=compteur.subscribe({
      next:(s)=>this.seconde=s,
      error:(e)=>console.error(e),
      complete:()=>console.info("complete")
    });
  }

  /**
   * au moment de la destruction de mon composant grâce à la méthode unscubscribe
   * nous permet d'eviter les fuite de donnée
   */

  ngOnDestroy(){
    this.subscribeCompteur.unsubscribe();
  }



}
