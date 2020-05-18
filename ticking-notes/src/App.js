import React from "react";
import { Switch, Link, Route } from "react-router-dom";
import { CreatePage } from "./pages/CreatePage";
import { NotesPage } from "./pages/NotesPage";
import { MessagePage } from "./pages/MessagePage";

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Notes</Link>
        </li>
        <li>
          <Link to="/create">Create note</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/" component={NotesPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/:message" component={MessagePage} />
      </Switch>
    </>
  );
}

export default App;
