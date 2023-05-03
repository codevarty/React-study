import { useState, useEffect} from "react";
import Movie from "../components/Movie";
import styles from "./style/Home.module.css";

function Home() {
  // loading 
  const [loading, setLoading] = useState("true");
  const [movies, setMovies] = useState([]);
  // fetch 보다 더 가독성이 뛰어남
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    // console.log(json.data.movies)
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
    }, []); // 한번만 실행
  // console.log(movies)
  return (
    <div className={styles.container}>
      {loading ? <span className={styles.loading}>Loading...</span> : <div className={styles.movies}>{
      movies.map((movie) => (
        movie.id !== 50204 &&
        <Movie
          key={movie.id}
          id={movie.id}
        /*props */ coverImg={movie.medium_cover_image} 
          title={movie.title} 
          summary={movie.summary} 
          genres={movie.genres}
        />)
      )}
          </div>}
    </div>
  );
}

export default Home;