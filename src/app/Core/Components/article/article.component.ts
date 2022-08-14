import { Component, OnInit } from '@angular/core';
import { Article } from '../../model/article';
import { Couleur } from '../../model/couleur';
import { ArticleService } from '../../service/article.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  constructor(private articleService:ArticleService) { }
articles!:Article[];
couleurs:Couleur[]=[
  {couleur:"rouge"},
  {couleur:"vert"},
  {couleur:"jaune"},
]

  ngOnInit(): void {
    this.getAllArticleController();
    console.log(this.articles);
    
  }
  getAllArticleController(){
this.articleService.getAllArticlesService().subscribe(data=>this.articles=data)
  }


}
