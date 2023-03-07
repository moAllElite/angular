export class ArticleModule {
    constructor(public titre:string,
                public prix:number,
                public  iconColor:string,
                public urlImage:string,
                public nbreLike:number,
                public comment:string
    ) {

    }
}