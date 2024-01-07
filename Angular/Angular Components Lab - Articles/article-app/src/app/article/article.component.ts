import { Component, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article',
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
  imageBtnTitle: string = 'Show Image';

  readMore(): void{
    this.articleDescLen += this.symbols;

    if(this.articleDesc !== undefined){
      if(this.articleDescLen >= this.articleDesc.length){
        this.showHideBtn = true;
        this.showReadMoreBtn = false;
      } else{
        this.descToShow = this.articleDesc?.substring(0, this.articleDescLen);
      }
    }
  }

  hideDesc(): void{
    this.descToShow = "";
    this.articleDescLen = 0;
    this.showHideBtn = false;
    this.showReadMoreBtn = true;
  }

  toggleImage() :void{
    this.imageIsShown = !this.imageIsShown;
    this.imageBtnTitle = this.imageBtnTitle === 'Show Image' ? 'Hide image' : "Show image";
  }
}
