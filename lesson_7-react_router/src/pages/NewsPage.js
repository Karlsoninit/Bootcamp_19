import React, { Component } from "react";
import axios from "axios";
import shortid from "shortid";
import { Link } from "react-router-dom";

export class NewsPage extends Component {
  state = {
    news: [],
    message: null,
  };

  componentDidMount() {
    this.fetchNews();
  }

  fetchNews = async () => {
    try {
      const news = await axios.get(
        `http://newsapi.org/v2/everything?q=bitcoin&from=2020-04-07&sortBy=publishedAt&apiKey=${this.props.uniqueKey}`
      );

      const newsKey = news.data.articles.map((a) => ({ ...a, key: shortid() }));

      this.setState({ news: newsKey });
    } catch (error) {
      console.log(error);
      this.setState({ message: error });
    }
  };

  render() {
    console.log("render");
    const { news, message } = this.state;
    return (
      <ul>
        {news.map((article) => (
          <li key={article.key}>
            <Link
              to={{
                pathname: `/news/${article.publishedAt}`,
                search: "?qwery:apple",
                hash: "#whant-newIphone",
                state: { from: this.state.news },
              }}
            >
              <img style={{ width: 400 }} alt="news" src={article.urlToImage} />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}
