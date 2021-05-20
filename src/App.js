import React from "react";
import ListManager from "./components/manager";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      movies: [],
    };

    console.log("app constructor")
  }

  componentDidMount() {
    console.log("app componentDidMount")
    fetch("http://my-json-server.typicode.com/bemaxima/fake-api/movies")
      .then((response) => response.json())
      .then((response) => {
        //
        this.setState({ loading: false, movies: response });
      });
  }

  render() {
    console.log("app render")
    const { movies, loading } = this.state;

    if (loading) {
      return "Please wait ...";
    }
    return <ListManager movies={movies} />;
  }
}

export default App;
