import PropTypes from "prop-types";
import "./Movie.css";


// Movie component는 state를 사용할 필요가 없으므로 function component로 만든다.
function Movie({year, title, summary, poster, genres}) { // Destructuring assignment
    return (
        <div className="movies__movie">
            <img src={poster} alt={title} title={title} />
            <div className="movie__data">
                <h3 className="movie__title">{title}</h3>
                <h5 className="movie__year">{year}</h5>
                <ul className="movie__genres">
                    {   
                        genres.map((item, index) => <li className="genres__genre" key={index}>{item}</li>)
                    }
                </ul>
                <p className="movie__summary">{String(summary).length > 233 ? `${String(summary).slice(0,233)}...` : summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year : PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired
    // PropTypes.array : 배열 여부만 검사(요소의 타입은 자유)
    // PropTypes.arrayOf : 배열 + 요소 타입까지 검사
}

export default Movie;