import PropTypes from "prop-types"
//Link는 브라우저 새로고침이 없어도 페이지 이동이 가능하게 해주는 컴포넌트이다.
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres}) {
  return <div>
  <img src={coverImg} alt={title}/>
  <h2><Link to={`/movie/${id}`}>{title}</Link></h2>
  <p>{summary}</p>
  <ul>
    {genres && genres.map((g) => 
      <li /*key values important*/key={g}>{g}</li>
    )}
  </ul>
</div>
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;