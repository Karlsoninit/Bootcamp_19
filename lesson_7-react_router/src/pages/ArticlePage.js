import React, { Component } from "react";
// import { Article } from "../components/article/Article";
import { fetchNews } from "../services/fetcher";
import queryString from "query-string";

class Article extends Component {
  state = {
    article: null,
  };
  componentDidMount() {
    this.getArticle();
  }

  getArticle = async () => {
    try {
      const parsed = queryString.parse(this.props.location.search);
      console.log(parsed);
      const news = await fetchNews(parsed.qwery);
      console.log("news", news);
      const newsKey = news.find(
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
          <button
            onClick={() =>
              this.props.history.push("/news", {
                qwerySearchString: queryString.parse(
                  this.props.location.search
                ),
                news: this.props.location.state,
              })
            }
          >
            show all news
          </button>
        </div>
      )
    );
  }
}

export const ArticlePage = (props) => {
  console.log("props ArticlePage", props);
  return <Article {...props} />;
};
