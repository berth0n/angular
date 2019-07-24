import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from './article.model';


@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent implements OnInit {
@Input() article:Article;
@Output() onClickArticle:EventEmitter<Article>
  constructor() { 
  this.onClickArticle=new EventEmitter();
  }

  ngOnInit() {
 
  }

  votePlus():boolean{
    this.article.votePlus();
    return false;
  }

  voteMoins():void{
     this.article.voteMoins();
  }
  clicked(article:Article):boolean{
    console.log("click");
    this. onClickArticle.emit(article);
    return false;
  }
}
