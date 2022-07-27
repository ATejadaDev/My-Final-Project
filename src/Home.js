import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/61Z1G7PtqYL._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Rune Factory 5 Limited Edition"
            price={59.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/813Pi5Ous9L._AC_SX569_.jpg"
          />
          <Product
            id="49538094"
            title="Echo Dot (3.ª generación) - Altavoz inteligente con Alexa, tela de color antracita"
            price={33.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SY200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="PlayStation 5 - Mando inalámbrico DualSense - Exclusivo para PS5"
            price={55.00}
            rating={3}
            image="https://m.media-amazon.com/images/I/51KNE0DS4vS._AC_SX679_.jpg"
          />
          <Product
            id="23445930"
            title="SanDisk SDSSDA-240G Plus – Disco sólido interno de 240 GB, SATA III SSD, con hasta 530 MB/s, Color Negro"
            price={38.97}
            rating={5}
            image="https://m.media-amazon.com/images/I/71J4Q8zM72L._AC_SX450_.jpg"
          />
          <Product
            id="3254354345"
            title="Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Antracita"
            price={33.66}
            rating={4}
            image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SX679_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="Nintendo Switch - Consola Estándar, Color Azul Neón/Rojo Neón"
            price={285.00}
            rating={1}
            image="https://m.media-amazon.com/images/I/71U1R-V8+dL._AC_SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
