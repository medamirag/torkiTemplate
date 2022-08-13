import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../model/article';
import { Besoin } from '../model/besoin';
import { CategorieMP } from '../model/categorie-mp';
import { Couleur } from '../model/couleur';
import { Gamme } from '../model/gamme';
import { Mp } from '../model/mp';

import { Ofab } from '../model/ofab';

@Injectable({
  providedIn: 'root'
})
export class OfService {
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

article1:Article=  {article:"Porte1",automatique:true,besoin:this.besoin1,couleur:this.couleur1,dimension:"l*L",gamme:this.gamme1};
article2:Article=    {article:"Porte2",automatique:false,besoin:this.besoin2,couleur:this.couleur2,dimension:"l*L",gamme:this.gamme2};

articles:Article[]=[this.article1,this.article2]

ofabs:Ofab[]=
[
  {article:this.article1,dateDebut:new Date,dateFin:new Date,ofab:"of1",quantite:2},
  {article:this.article1,dateDebut:new Date,dateFin:new Date,ofab:"of2",quantite:2},
]
  constructor() { }

  getAllOfabsService():Observable<Ofab[]>{
      return new Observable(data=>data.next(this.ofabs))

  }
  getOfByOfService(ofab:string){
    return this.ofabs.find(elem=>elem.ofab==ofab)

  }

}
