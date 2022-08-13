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
import { ArticleService } from 'src/app/Core/service/article.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  couleurs!:Couleur[]
  gammes!:Gamme[]
  auto:boolean=false
  gamme:string
  couleur:string
  article:Article={article:null,automatique:null,besoin:null,dimension:null,couleur:null,gamme:null}
  besoins:Besoin[]=[]
  
  constructor(private articleService : ArticleService,private gammeService:GammeService,private couleurService:CouleurService,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getAllCouleursController()
    this.getAllGammesController()
    console.log(this.article);
    
  }
getAllCouleursController(){
  this.couleurService.getAllCouleurs().subscribe(data=>this.couleurs=data)
}
getAllGammesController(){
  this.gammeService.getAllGammes().subscribe(data=>this.gammes=data)
}
deleteBesoin(){
  this.besoins.pop()
}
    
openDialog(): void {
  
  const dialogRef = this.dialog.open(PopupBesoinComponent, {
    width: '300px',
    data: {mp:null,article:this.article},
  });
 
  dialogRef.afterClosed().subscribe(result => {
    console.log("this.article");
    console.log(this.article);

    if(result!=null){
      this.besoins.push(result)
    }

  });
}
saveArticleController(){
  this.getGammeByIDController()
  this.getCouleurByIDController()
  this.article.automatique=this.auto
  console.log(this.article);
  console.log("beforepushing");
  
  this.articleService.saveArticleService(this.article)
}
getGammeByIDController(){
 this.article.gamme= this.gammeService.getGammeByID(this.gamme)
}
getCouleurByIDController(){
 this.couleurService.getCouleurByIDService(this.couleur).subscribe(data=>this.article.couleur=data)
}
}


