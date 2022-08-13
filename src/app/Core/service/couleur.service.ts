import { Injectable } from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Couleur } from '../model/couleur';

@Injectable({
  providedIn: 'root'
})
export class CouleurService {
  couleurs:Couleur[]=[
    {couleur:"rouge"},
    {couleur:"vert"},
    {couleur:"jaune"},
  ]
  constructor() { }
  getAllCouleurs():Observable<Couleur[]>{
    return new Observable(data=>data.next(this.couleurs))
  }
  getCouleurByIDService(couleur:string):Observable<Couleur>{
    return new Observable(data=>data.next(this.couleurs.find(x=>x.couleur==couleur)))
  }
}
