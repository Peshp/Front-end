import { Component, Input } from '@angular/core';
import { Article } from '../models/article-model';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [],
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})

export class ArticleComponent {
  constructor(){
    this.articleDescLen = 0;
    this.descToShow = "";
  }

  private symbols: number = 250;
  @Input() article: Article | undefined;
  @Input() articleDesc: string | undefined;
  descToShow: string | undefined;
  articleDescLen: number;
  showReadMoreBtn: boolean = true;
  showHideBtn: boolean = false;
  imageIsShown: boolean = false;
  imageButtonTitle: string = "Show Image";

  readMore(){
    this.articleDescLen += this.symbols;
    if(this.articleDescLen >= this.articleDesc.length){
      this.showHideBtn = true;
      this.showReadMoreBtn = false;
    } else{
      this.descToShow = this.articleDesc?.substring(0, this.articleDescLen);
    }
  }

  toggleImage(){
    this.imageIsShown = !this.imageIsShown;
    this.imageButtonTitle = this.imageButtonTitle === 'Show Image'
      ? 'Hide Image' : "Show Image";
  }

  hideDesc(){
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }
}
