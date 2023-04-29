import { useState, useEffect} from "react";
import Movie from "../components/Movie";

function Home() {
  // loading 
  const [loading, setLoading] = useState("true");
  const [movies, setMovies] = useState([]);
  // fetch 보다 더 가독성이 뛰어남
  const getMovies = async () => {
    const response = await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`);
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  }
  useEffect(() => {
    getMovies();
    }, []); // 한번만 실행
  // console.log(movies)
  return (
    <div>
      {loading ? "Loading..." : <div>{
      movies.map((movie) => ( 
        <Movie
          key={movie.id}
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