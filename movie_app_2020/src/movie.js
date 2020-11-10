import React from 'react';
import PropTypes from "prop-types";
import './movie.css';
// state가 필요없기 때문에, class형으로 할 필요가 없다. 
function Movie({ id, year, title, summary, poster, genres }) {
    return (<div className='movie'>
        <img src={poster} title={title} />
        <ul className='genres'>
            {genres.map((genre, index) =>
                <li key={index} className='genres__genre'>{genre}</li>)
            }
        </ul>
        <div className='movie__data'>
            <h2 className='movie__title'>{title}</h2>
            <h4 className='movie__year'>{year}</h4>
            <p className='movie__summary'>{summary.slice(0, 180)} ... </p>
        </div>
    </div>);
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;