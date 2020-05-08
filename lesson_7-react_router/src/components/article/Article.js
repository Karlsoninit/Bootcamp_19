import React, { Component } from "react";
import axios from "axios";

export class Article extends Component {
  state = {
    article: null,
  };
  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      const news = await axios.get(
        "http://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=ed5ebee752754cf7a93918ae83acba6f"
      );

      const newsKey = news.data.articles.find(
        (article) => article.publishedAt === this.props.match.params.article
      );

      this.setState({ article: newsKey });
    } catch (error) {
      console.log(error);
      this.setState({ message: error });
    }
  };
  render() {
    const { article } = this.state;
    return (
      article && (
        <div>
          <h2>{article.author}</h2>
          <p>{article.description}</p>
          <img style={{ width: 600 }} alt="news" src={article.urlToImage} />
          <button onClick={() => this.props.history.push("/news")}>
            show all news
          </button>
        </div>
      )
    );
  }
}
