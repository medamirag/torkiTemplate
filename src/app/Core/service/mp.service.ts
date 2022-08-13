import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategorieMP } from '../model/categorie-mp';
import { Mp } from '../model/mp';

@Injectable({
  providedIn: 'root'
})
export class MpService {

  categorie1:CategorieMP={categorie:"categorie1"}
  categorie2:CategorieMP={categorie:"categorie2"}
  mp1:Mp={mp:"mp1",categorie:this.categorie1,code:"code1"}
  mp2:Mp={mp:"mp2",categorie:this.categorie1,code:"code2"}
  mp3:Mp={mp:"mp3",categorie:this.categorie1,code:"code3"}
  mp4:Mp={mp:"mp4",categorie:this.categorie2,code:"code4"}
  mps:Mp[]=[]
  constructor() { 
    this.mps.push(this.mp1);
    this.mps.push(this.mp2);
    this.mps.push(this.mp3);
    this.mps.push(this.mp4);
  }

  
    getAllMPsService():Observable<Mp[]>{
      return new Observable(data=>data.next(this.mps))
    }
    findMpByNameService(mp:string):Observable<Mp>{
      return new Observable(data=>data.next(this.mps.find(x=>x.mp==mp)))
    }

}
