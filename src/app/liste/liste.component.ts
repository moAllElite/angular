import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {filter, interval, Observable, Subscription, tap} from "rxjs";
import {map} from "rxjs/operators";

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
  /**
   * La norme est d'ajouter un  $  à la fin du nom de toute variable qui contient un Observable.
   * Comme vous pouvez le constater, quand on déclare le type de  compteur$
   * , on le déclare comme  Observable  qui émet des  number  en passant  number  entre chevrons <>
   */
  compteur$!:Observable<string>

  /**
   * La méthode  interval()  permet de générer un Observable qui émet des nombres croissants ;
   * La méthode  subscribe()  permet de souscrire à un Observable dans le code TypeScript ;
   * Le pipe  async  souscrit à un Observable pour afficher ses émissions dans le template.
   */
  ngOnInit(){
    this.items=this.dataService.itemsArticle;
    this.compteur$=interval(1000).pipe(
      filter(value => value % 3 === 0 ),
      map(value => value % 2 === 0 ?
        ` ${value} est pair`:
        `${value} est impair`
      ),
      /**
       * un effet secondaire est une fonction qui fait quelque chose
       * avec les émissions d'un Observable sans les modifier.
       * Pour ajouter un effet secondaire à un Observable, on utilise l'opérateur  tap()
       */
      tap(console.log
        ,error => console.error(error),
        () => console.info("complete")
      ),
    );

  }
  /**
   * au moment de la destruction de mon composant grâce à la méthode unsubscribe
   * quand on n'a plus besoin de l'Observable, car sinon, on court le risque de créer des fuites de mémoire !
   */


  onAffiche(arg:string):string{
    return this.message="Merci d'avoir acheter :"+arg;
  }
  getVisible():string{
    if(this.onAffiche!=null){
      return 'visible';
    }else {
      return  'hidden';
    }
  }
}
