import { Component, OnInit,Inject } from '@angular/core';
import { Besoin } from 'src/app/Core/model/besoin';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MpService } from 'src/app/Core/service/mp.service';
import { Mp } from 'src/app/Core/model/mp';
import { CategorieMP } from 'src/app/Core/model/categorie-mp';

@Component({
  selector: 'app-popup-besoin',
  templateUrl: './popup-besoin.component.html',
  styleUrls: ['./popup-besoin.component.css']
})
export class PopupBesoinComponent implements OnInit {
  
mps:Mp[]=[]
selectedMP : any;
mp : Mp;
quantite : number;
  constructor(private mpService:MpService,
    public dialogRef: MatDialogRef<PopupBesoinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Besoin,
  ) 
  {}
  ngOnInit(): void {
    this.getAllMpController()
  }
getAllMpController(){
  this.mpService.getAllMPsService().subscribe(data=>this.mps=data)
}
findMpByNameController(mp:string){
  this.mpService.findMpByNameService(mp).subscribe(data=>this.mp=data)
}
  closeDiag(): void {
    this.data.mp=this.mp;
    this.data.quantite=this.quantite;
    this.dialogRef.close();
  }
  doSomething(){
    console.log(this.mp);
    
    this.findMpByNameController(this.selectedMP)
    console.log(this.mp);

  }
}
