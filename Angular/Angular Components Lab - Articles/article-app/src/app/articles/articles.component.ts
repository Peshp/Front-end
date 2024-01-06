import { Component, OnInit } from '@angular/core';
import { Article } from '../models/article-model';
import { ArticleData } from '../data/data';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent implements OnInit {
  articles : Article[];

  constructor() { }

  ngOnInit(): void {
    this.articles = new ArticleData().getData();
  }
}
