
import one from "../images/one.jpg"
import two from "../images/three.jpg"
import three from "../images/two.jpg"


// Perfume list
function Perfume() {
    return (
      <div className="products">
        <div className="box">
          <img src={one} alt="Fogg Wood Extreme"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={two} alt="Villain"></img>
          <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
        </div>
        <div className="box">
          <img src={three} alt="Designer Club"></img>
          <p>Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long Lasting Perfume</p>
        </div>
      </div>
    );
  }


  


  
export default Perfume