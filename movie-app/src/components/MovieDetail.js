import protoTypes from "prop-types";
import {Link} from "react-router-dom"
function MovieDetail({title, rating,description,downCount,coverImg}) {
return <div>
  <h1>[{title}]</h1>
  <Link to="/">Home</Link>
  <h2>Rating: {rating}</h2>
  <h2>Movie description:</h2>
  <p>{description}</p>
  <h2>download count:</h2>
  <p> {downCount}</p>
  <img src={coverImg} alt={title} />
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