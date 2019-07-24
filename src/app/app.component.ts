import { Component, OnInit, Output } from '@angular/core';
import { Article } from './article-item/article.model';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud angular 5';
  articles:Article[];
  constructor(){
  this.articles=[
    new Article("Angular", "www.angular.io"),
    new Article("Unity","www.unity.com",10),
    new Article("ECMS6","www.javascript",5)
  ]

  }
  sortedArticles():Article[] {
  return this.articles=this.articles.sort((a,b)=>a.vote - b.vote)
  }
  addArticle(title:HTMLInputElement, link:HTMLInputElement):boolean{
    console.log(`Title: ${title.value} \nLInk: ${link.value}-test`);
    this.articles.push(new Article(title.value,link.value));
    return false;
  }
  clicked(article:Article):void{
    console.log(article);
  }
}


