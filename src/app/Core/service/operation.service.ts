import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../model/operation';

@Injectable({
  providedIn: 'root'
})
export class OperationService {
operations:Operation[]=[
  {
  operation:"op1",
},
  {
  operation:"op2",
},
  {
  operation:"op3",
}
]
  constructor() { }
  
getAllOperationsService():Observable<Operation[]>{
  return new Observable(data=>data.next(this.operations))

}


}