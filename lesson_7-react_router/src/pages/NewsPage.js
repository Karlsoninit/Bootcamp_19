import React, { Component } from "react";

// import shortid from "shortid";
import { Link } from "react-router-dom";
import { fetchNews } from "../services/fetcher";

class NewsPage extends Component {
  state = {
    news: [],
    message: null,
    qwery: "run",
  };

  componentDidMount() {
    this.updateNews();
  }

  updateNews = async () => {
    try {
      // const news = await fetchNews(
      //   this.props.location.state
      //     ? this.props.location.state.qwerySearchString.qwery
      //     : this.state.qwery
      // );
      const news = await fetchNews(this.state.qwery);
      this.setState({ news });
    } catch (message) {
      this.setState({ message });
    }
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.qwery !== this.state.qwery) {
      this.updateNews();
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const qwery = evt.target.elements[0].value;
    this.setState({ qwery });
  };

  render() {
    const { news, qwery } = this.state;
    return (
      news.length && (
        <>
          <form onSubmit={this.handleSubmit}>
            <input placeholder="find news" />
            <button type="submit">search</button>
          </form>
          <ul>
            {news.map((article) => (
              <li key={article.key}>
                <Link
                  to={{
                    pathname: `${this.props.match.path}/${article.publishedAt}`,
                    search: `?qwery=${qwery}&author=${article.author}`,
                    hash: "#whant-newIphone",
                    state: { news },
                  }}
                >
                  <img
                    style={{ width: 400 }}
                    alt="news"
                    src={article.urlToImage}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </>
      )
    );
  }
}

export default NewsPage;
