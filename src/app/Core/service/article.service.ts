import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { CategorieMP } from '../model/categorie-mp';
import { Mp } from '../model/mp';
import { Besoin } from '../model/besoin';
import { Couleur } from '../model/couleur';
import { Gamme } from '../model/gamme';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

categorie1:CategorieMP={categorie:"categorie1"}
categorie2:CategorieMP={categorie:"categorie2"}
mp1:Mp={mp:"mp1",categorie:this.categorie1,code:"code1"}
mp2:Mp={mp:"mp2",categorie:this.categorie1,code:"code2"}
mp3:Mp={mp:"mp3",categorie:this.categorie1,code:"code3"}
mp4:Mp={mp:"mp4",categorie:this.categorie2,code:"code4"}

besoin1:Besoin[]=[
  {mp:this.mp1,quantite:10,article:null},
  {mp:this.mp2,quantite:4,article:null},
  {mp:this.mp3,quantite:11,article:null},
  {mp:this.mp3,quantite:2,article:null},
]
besoin2:Besoin[]=[
  {mp:this.mp1,quantite:1,article:null},
  {mp:this.mp3,quantite:8,article:null},
  {mp:this.mp3,quantite:2,article:null},
]
couleur1:Couleur={couleur:"rouge"}
couleur2:Couleur={couleur:"jaune"}

gamme1:Gamme={gamme:"gamme1"}
gamme2:Gamme={gamme:"gamme2"}
articles:Article[]=[
  {article:"Porte1",automatique:true,besoin:this.besoin1,couleur:this.couleur1,dimension:"l*L",gamme:this.gamme1},
  {article:"Porte2",automatique:false,besoin:this.besoin2,couleur:this.couleur2,dimension:"l*L",gamme:this.gamme2},
]
  constructor() { console.log("callled again");
  }
  getAllArticlesService():Observable<Article[]>{
    return new Observable(data=>data.next(this.articles))
  }
  saveArticleService(article:Article){
console.log("pushing");
console.log(this.articles);
    this.articles.push(article)
  }
}
