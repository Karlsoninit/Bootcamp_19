import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    notes: [],
    loader: true,
    error: null,
  };

  componentDidMount() {
    console.log("componentDidMount");
    this.getNotes();
  }

  postNotes = async (post) => {
    this.setState({ loader: true });
    try {
      const data = await axios.post(
        "https://news-9cced.firebaseio.com/notes.json",
        post
      );
      console.log(data);
      await this.getNotes();
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({ loader: false });
    }
  };

  getNotes = async () => {
    this.setState({ loader: true });
    try {
      const data = await axios.get(
        "https://news-9cced.firebaseio.com/notes.json"
      );
      console.log(data.data);

      let transformResponse = data.data
        ? Object.keys(data.data).map((key) => ({
            ...data.data[key],
            id: key,
          }))
        : [];

      this.setState({ notes: transformResponse });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  deleteNote = async (id) => {
    this.setState({ loader: true });
    try {
      await axios.delete(`https://news-9cced.firebaseio.com/notes/${id}.json`);
      await this.getNotes();
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ loader: false });
    }
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    const post = {};
    formData.forEach((value, name) => (post[name] = value));
    this.postNotes(post);
  };

  render() {
    console.log("render");
    const { notes, loader } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input placeholder="enter your notes ..." name="title" type="text" />
          <input type="date" name="date" />
          <button type="submit">SEND</button>
        </form>
        {loader && <h2>Loading ....</h2>}
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <h2>{note.title}</h2>
              <button onClick={() => this.deleteNote(note.id)}>delete</button>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default App;
