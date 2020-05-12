import React, { lazy, Suspense } from "react";
import Loadable from "react-loadable";
import { Switch, Route, Redirect } from "react-router-dom";
import { ClockLoader } from "react-spinners";

// import ErrorPage from "./pages/ErrorPage";
import AuthPage from "./pages/AuthPage";

import { ArticlePage } from "./pages/ArticlePage";

const Loading = () => (
  <div className="sweet-loading">
    <ClockLoader size={150} color={"red"} />
  </div>
);

const HomeLoadable = Loadable({
  loader: () => import("./pages/HomePage" /* webpackChunkName: "HomePage" */),
  loading: Loading,
});
const NewsLoadable = Loadable({
  loader: () => import("./pages/NewsPage" /* webpackChunkName: "NewsPage" */),
  loading: Loading,
});

const ProfileLazy = lazy(() =>
  import("./pages/ProfilePage" /* webpackChunkName: "ProfilePage" */)
);

const apiKey = "ed5ebee752754cf7a93918ae83acba6f";

const config = {
  news: {
    path: "/news",
    pathName: "news",
    homeLabel: "NEWS",
  },
};

export const useRouter = (authentication) => {
  if (authentication) {
    return (
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <HomeLoadable {...props} uniqueKey={apiKey} />}
          />
          <Route
            path="/profile"
            render={(props) => <ProfileLazy {...props} info={{ port: 8800 }} />}
          />
          <Route
            exact
            path={config.news.path}
            render={(props) => <NewsLoadable {...props} uniqueKey={apiKey} />}
          />
          <Route
            path={`${config.news.path}/:article`}
            component={ArticlePage}
          />
          <Redirect exact to="/" />
        </Switch>
      </Suspense>
    );
  }

  return (
    <Switch>
      <Route path="/authentication" component={AuthPage} />
      <Redirect to="/authentication" />
    </Switch>
  );
};
