
import React from "react";
import axios from "axios";
import Movie from "../componants/Movie";
import "./Home.css";

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  getMovies = async () => {
    // 비동기 함수 이걸 기다려라
    const movies = await axios.get(
      "https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating"
    ); // 내부에서 기다릴거 await 지정
    this.setState({ movies: movies.data.data.movies, isLoading: false });
  };

  componentDidMount() {
    // JS에게 getMovie()가 시간이 필요하다고
    this.getMovies();
  }

  render() {
    // 자바스크립스 class안에서 태그는 className라고 써야함
    /*const{ isLoading } = this.state; 
    return <div>{isLoading ? "Loding": "we are ready"}</div>*/
    return (
      <section className="container">
        {this.state.isLoading ? (
          <div className="loader">
            <span className="loader_text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {this.state.movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;