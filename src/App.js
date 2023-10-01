import { useEffect, useState, useRef } from 'react';
import './App.css';

// carousel function
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

  if (!data || !data.length) return null;

// filter function

const buttons = document.querySelectorAll('.main-btn');
const boxes = document.querySelectorAll('.project-box');

buttons.forEach((button) => {
  button.addEventListener('click', function(){
    const type = this.id;
    buttons.forEach((btn) => {
      btn.classList.remove('active');
    });

    this.classList.add('active');

    if(type === 'food-btn') {
      eachBoxes('food', boxes)
    } else if(type === 'clothes-btn') {
      eachBoxes('clothes', boxes);
    } else if(type === 'eletro-btn') {
      eachBoxes('eletro', boxes);
    } else {
      eachBoxes('all', boxes);
    }
  });

  function eachBoxes(type, boxes) {
    boxes.forEach((box) => {
      if (type === 'all' || box.classList.contains(type)) {
        box.style.display = 'block';
      } else {
        box.style.display = 'none';
      }
    });
  }
  
});



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
      <div id="filter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>Busque seu produto aqui!</h1>
            </div>
            <div className="col-md-12" id="filter-btn-box">
              <button className="main-btn filter-btn active" id="all-btn">Todos</button>
              <button className="main-btn filter-btn" id="food-btn">Alimento</button>
              <button className="main-btn filter-btn" id="clothes-btn">Roupa</button>
              <button className="main-btn filter-btn" id="eletro-btn">Eletrodoméstico</button>
            </div>
            <div id="filter-box">
              <div className="col-md-4 project-box food" id="project-box-food">
                  <div className="row">
                    <img src="/static/static/images/macas.jpg" className="img-fluid"  alt="Maça"></img>
                    <img src="/static/static/images/pao-integral.jpg" className="img-fluid"  alt="Pão Integral"></img>
                    <img src="/static/static/images/yorgute.jpg" className="img-fluid" alt="Iorgute Integral"></img>
                    <img src="/static/static/images/salmao-fresco.jpg" className="img-fluid"  alt="Salmão Fresco"></img>
                    <img src="/static/static/images/frango-organico.jpg" className="img-fluid"  alt="Frango Orgânico"></img>
                  </div>
                    <img src="/static/static/images/arroz-integral.jpg" className="img-fluid"  alt="Arroz Integral"></img>
                    <img src="/static/static/images/queijo-cheddar.jpg" className="img-fluid"  alt="Queijo Cheddar"></img>
                    <img src="/static/static/images/cenouras.jpg" className="img-fluid"  alt="Cenouras"></img>
                    <img src="/static/static/images/chocolate-amargo.jpg" className="img-fluid"  alt="Chocolate Amargo"></img>
                    <img src="/static/static/images/massa-trigo.jpg" className="img-fluid"  alt="Massa de Trigo"></img>
              </div>
              <div className="col-md-4 project-box clothes" id="project-box-clothes">
                <div className="row">
                  <img src="/static/static/images/calca-moletom.jpg" className="img-fluid"  alt="Calça Moletom"></img>
                  <img src="/static/static/images/camisa-polo.jpg" className="img-fluid" alt="Camisa Polo"></img>
                  <img src="/static/static/images/camisa-trico.jpg" className="img-fluid" alt="Camisa Trico"></img>
                  <img src="/static/static/images/jaqueta-couro.jpg" className="img-fluid"  alt="Jaqueta de Couro"></img>
                  <img src="/static/static/images/jaqueta-moto.jpg" className="img-fluid" alt="Jaqueta de Moto"></img>
                </div>
                <img src="/static/static/images/saia.jpg" className="img-fluid"  alt="Saia"></img>
                <img src="/static/static/images/sapato-salto.jpg" className="img-fluid" alt="Salto Alto"></img>
                <img src="/static/static/images/shorts-corrida.jpg" className="img-fluid"  alt="Shorts de Corrida"></img>
                <img src="/static/static/images/terno.jpg" className="img-fluid" alt="Terno Elegante"></img>
                <img src="/static/static/images/vestido.jpg" className="img-fluid"  alt="Vestido"></img>
              </div>
              <div className="col-md-4 project-box eletro" id="project-box-eletro">
                <div className="row">
                  <img src="/static/static/images/conjunto-facas.jpg" className="img-fluid" alt="Conjutos Faca"></img>
                  <img src="/static/static/images/copos.jpg" className="img-fluid" alt="Jogo de Copos"></img>
                  <img src="/static/static/images/escorregador-louca.jpg" className="img-fluid" alt="Escorregador de Louça"></img>
                  <img src="/static/static/images/forma-bolo.jpg" className="img-fluid" alt="Forma de Bolo"></img>
                  <img src="/static/static/images/frigideira.jpg" className="img-fluid" alt="Frigideira"></img>
                </div>
                <img src="/static/static/images/liquidificador.jpg" className="img-fluid" alt="Liquidificador"></img>
                <img src="/static/static/images/maquina-cafe.jpg" className="img-fluid" alt="Máquina de Café"></img>
                <img src="/static/static/images/mixer-mao.jpg" className="img-fluid" alt="Mixer de Mão"></img>
                <img src="/static/static/images/panela.jpg" className="img-fluid" alt="Panela"></img>
                <img src="/static/static/images/tabua-corte.jpg" className="img-fluid" alt="Tabua de Corte"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
