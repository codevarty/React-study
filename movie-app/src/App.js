import { useState, useEffect} from "react";
/**Movie App */
// map 함수는 새로운 배열을 반환한다.
function App() {
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
      movies.map(
        (movie) => 
          <div key={movie.id}>
            <img src={movie.medium_cover_image ? movie.medium_cover_image : null } alt="empty" />
            <h2>{movie.title}</h2>
            <p>{movie.summary}</p>
            <ul>
              {movie.genres.map((g) => 
                <li /*key values important*/key={g}>{g}</li>
              )}
            </ul>
          </div>)}
          </div>}
    </div>
  );
}

export default App;
