import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Couleur } from 'src/app/Core/model/couleur';
import { Gamme } from 'src/app/Core/model/gamme';
import { CouleurService } from 'src/app/Core/service/couleur.service';
import { GammeService } from 'src/app/Core/service/gamme.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PopupBesoinComponent } from '../../besoin/popup-besoin/popup-besoin.component';
import { Article } from 'src/app/Core/model/article';
import { Besoin } from 'src/app/Core/model/besoin';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  couleurs!:Couleur[]
  gammes!:Gamme[]
  article!:Article
  besoin!:Besoin
  constructor(private gammeService:GammeService,private couleurService:CouleurService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCouleursController()
    this.getAllGammesController()
  }
getAllCouleursController(){
  this.couleurService.getAllCouleurs().subscribe(data=>this.couleurs=data)
}
getAllGammesController(){
  this.gammeService.getAllGammes().subscribe(data=>this.gammes=data)
}
    
openDialog(): void {
  
  const dialogRef = this.dialog.open(PopupBesoinComponent, {
    width: '250px',
    data: {mp:null,article:this.article},
  });

  dialogRef.afterClosed().subscribe(result => {
    console.log('The dialog was closed');
    this.besoin = result;
    console.log('res');
    console.log(this.besoin);

  });
}
}


