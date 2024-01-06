import { Article } from "../models/article-model";
import { data } from "./seed";

export class ArticleData{
    getData(): Article[] {
        let article: Article[] = [];
        for (let index = 0; index < data.length; index++) {
            article[index] = new Article(data[index].title, data[index].description,
                data[index].author, data[index].imageUrl);
        }

        return article;
    }
}