// Route 컴포넌트의 :id 값은 useParams()를 통해 받을 수 있다.
// 객체에서 키 이름은 id가 된다.
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
function Detail() {
  const [loading, setLoading] = useState("true");
  const [movie, setMovie] = useState([]);
  const {id} = useParams();
  const getMovie = async () => {
    const response = await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`);
    const json = await response.json();

    setMovie(json.data.movie);
    // console.log(json.data.movie)
    setLoading(false); //loading을 false로 바꿔준다.
  }
  useEffect(()=> {
    getMovie();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 한번만 실행
  return (<div>
    {loading ? "Loading..." : <div>
      <MovieDetail 
        key={movie.id}
        title={movie.title}
        rating={movie.rating}
        description={movie.description_full}
        coverImg={movie.large_cover_image}
      />
      </div>}
  </div>)
}

export default Detail;