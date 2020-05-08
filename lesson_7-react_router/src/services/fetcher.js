import axios from "axios";
import shortid from "shortid";

axios.defaults.baseURL = "http://newsapi.org/v2";

export const fetchNews = async (qwery) => {
  try {
    const news = await axios.get(
      `/everything?q=${qwery}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_UNIQUE_KEY}`
    );

    const newsKey = news.data.articles.map((a) => ({ ...a, key: shortid() }));
    return newsKey;
  } catch (error) {
    console.log(error);
  }
};
