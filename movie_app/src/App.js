import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component {
  state = {
    isLoading : true,
    movies : []
  }

  getMovies = async () => {
    // Destructuring assignment
    const {
      data : {
        data : {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isLoading : false}); // = this.setState({movies : movies, isLoading : false});
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading } = this.state; // Destructuring assignment
    return (
      <section className="container">
        {
          isLoading
          ? (
            <div className="loader">
              <span className="loader__text">Loading...</span>
            </div>
          )
          : (
            <div className="movies">
              {
                this.state.movies.map((item, index) => {
                  return <Movie 
                          key={index}
                          year={item.year}
                          title={item.title}
                          summary={item.summary}
                          poster={item.medium_cover_image}
                          genres={item.genres}
                        />
                })
              }
            </div>
          )
        }
      </section>
    );
  }
}

export default App;