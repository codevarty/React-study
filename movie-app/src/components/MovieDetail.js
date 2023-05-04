import protoTypes from "prop-types";
import {Link} from "react-router-dom"
import styles from "./MovieDetail.module.css"
function MovieDetail({title, rating,description,downCount,coverImg}) {
return <div className={styles.movie_container}>
  <img src={coverImg} alt={title} />
  <h1>[{title}]</h1>
  <Link to="/"><span className={styles.link}>Home</span></Link>
  <h2>Rating: {rating}</h2>
  <h2>Movie description:</h2>
  <p>{description}</p>
  <h2>download count:</h2>
  <p> {downCount}</p>
</div>
}

MovieDetail.protoTypes = {  
  title: protoTypes.string.isRequired,
  rating: protoTypes.number.isRequired,
  description: protoTypes.string.isRequired,
  downCount: protoTypes.number.isRequired,
  coverImg: protoTypes.string.isRequired,
}
export default MovieDetail;