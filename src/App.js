import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const carousel = useRef(null);

  useEffect(() => {
    fetch('http://localhost:3000/static/shoes.json').then((Response) => Response.json()).then(setData);
  }, []);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  if (!data || !data.length) return null


  return (
    <div className='container'>
      <header>
        <div className="navbar">
          <ul className="navLinks">
            <li><i><ion-icon name="home"></ion-icon></i><a href="index.html">Home</a></li>
            <li><i><ion-icon name="pricetag"></ion-icon></i><a href="index.html">Promoções</a></li>
            <li><i><ion-icon name="information-circle"></ion-icon></i><a href="index.html">Sobre</a></li>
          </ul>
        </div>
        <a className="button-login" href="index.html"><button>Login</button></a>
      </header>
        <div className='logo'>
          <img src="/static/static/images/logo.png" alt="KeepCompre Logo"/>
        </div>

      <div className="carousel" ref={carousel}>
        {data.map((item) => {
          const { id, name, price, oldPrice, image} = item
          return (
            <div className="item" key={id}>
              <div className="image">
                <img src={image} alt={name}/>
              </div>
              <div className="info">
                <span className="name">{name}</span>
                <span className="oldPrice">{oldPrice}</span>
                <span className="price">{price}</span>
              </div>
            </div>
          );
        })}
      </div>
      <div className="buttons">
        <button onClick={handleLeftClick}>
          <img src="/static/static/images/216151_right_chevron_icon.png" alt="Button Left"/>
        </button>
        <button onClick={handleRightClick}>
          <img src="/static/static/images/216151_right_chevron_icon.png" alt="Button Right"/>
        </button>
      </div>
    </div>
  );
}

export default App;
