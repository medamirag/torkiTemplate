import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gamme } from '../model/gamme';

@Injectable({
  providedIn: 'root'
})
export class GammeService {
gammes:Gamme[]=[
  {gamme:"Gamme1"},
  {gamme:"Gamme2"},
  {gamme:"Gamme3"},
]
  constructor() { }
  getAllGammes():Observable<Gamme[]>{
    return new Observable(data=>data.next(this.gammes))
  }
  getGammeByID(gamme:string){
    
    return this.gammes.find(g=>g.gamme==gamme)
  }


}
