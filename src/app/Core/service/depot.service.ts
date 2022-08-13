import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Depot } from '../model/depot';

@Injectable({
  providedIn: 'root'
})
export class DepotService {
  constructor() { }

depots:Depot[]=[
  {depot:"depot1"},
  {depot:"depot2"}
]

  getAllDepots():Observable<Depot[]>{
    return new Observable(data=>data.next(this.depots))
  }
}
