import foodILike from "./foods";
import PropTypes from "prop-types";

function Food({name, image, rating}) { // 구조 분해 할당
  return (
    <div>
      <h2>I like {name}, {rating}/5</h2>
      <img src={image} alt={name} width="100" height="100"/>
    </div>
  );
}
Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {
        foodILike.map((item, index) => 
          <Food name={item.name} image={item.image} rating={item.rating} key={index}/>
        )
      }
      {/* cf) <Food name={"Rice"}/> = <Food name="Rice"/> */}
    </div>
  );
}

export default App;