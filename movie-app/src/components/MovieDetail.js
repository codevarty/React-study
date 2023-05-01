import protoTypes from "prop-types";
function MovieDetail({title, rating,description,coverImg}) {
return <div>
  <h1>Title: {title}</h1>
  <h2>Rating: {rating}</h2>
  <h2>Movie description:</h2>
  <p>{description}</p>
  <img src={coverImg} alt={title} />
</div>
}

MovieDetail.protoTypes = {  
  title: protoTypes.string.isRequired,
  rating: protoTypes.number.isRequired,
  description: protoTypes.string.isRequired,
  coverImg: protoTypes.string.isRequired,
}
export default MovieDetail;