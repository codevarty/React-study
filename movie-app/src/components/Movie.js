import PropTypes from "prop-types"
import styles from "./Movie.module.css"
//Link는 브라우저 새로고침이 없어도 페이지 이동이 가능하게 해주는 컴포넌트이다.
import {Link} from "react-router-dom"

function Movie({id, coverImg, title, summary, genres}) {
  return <div className={styles.box}>
  <Link to={`/movie/${id}`}><img className={styles.movieImg} src={coverImg} alt={title}/></Link>
  <div className={styles.content}>
    <h2>{title}</h2>
    <p>{summary.length > 235 ? `${summary.slice(0,235)}...` : summary}</p>
    <ul className={styles.movie_list}>
      {genres && genres.map((g) => 
        <li /*key values important*/key={g}>{g}</li>
      )}
    </ul>
  </div>
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