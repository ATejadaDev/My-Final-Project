import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
  return (
    <div className='home'>
        <div className='home__container'>
            <img className='home__image' src='https://m.media-amazon.com/images/I/61Z1G7PtqYL._SX3000_.jpg' alt='XD' />
        </div>
        <div className='home__row'>
            <Product
            id="15726335" 
            title={"Rune Factory 5 Limited Edition"} 
            price={59.99} 
            image="https://m.media-amazon.com/images/I/813Pi5Ous9L._AC_SX569_.jpg"
            rating={5}
            />
            <Product 
            id="31301503"
            title={"Echo Dot (3.ª generación) - Altavoz inteligente con Alexa, tela de color antracita"} price={33.99} 
            image="https://m.media-amazon.com/images/I/61u48FEs0rL._AC_SY200_.jpg"
            rating={3}
            />
        </div>
        <div className='home__row'>
        <Product 
            id="34335817"
            title={"PlayStation 5 - Mando inalámbrico DualSense - Exclusivo para PS5"} 
            price={54.99} 
            image="https://m.media-amazon.com/images/I/51KNE0DS4vS._AC_SX679_.jpg"
            rating={5}
            />
        <Product 
            id="79083179"
            title={"SanDisk SDSSDA-240G Plus – Disco sólido interno de 240 GB, SATA III SSD, con hasta 530 MB/s, Color Negro"} 
            price={33.66} 
            image="https://m.media-amazon.com/images/I/71J4Q8zM72L._AC_SX450_.jpg"
            rating={4}
            />
        <Product 
            id="55137540"
            title={"Echo Dot (4.ª generación) | Altavoz inteligente con Alexa | Antracita"} 
            price={38.99} 
            image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SX679_.jpg"
            rating={4}
            />
        </div>
        <div className='home__row'>
            <Product 
                id="41542214"
                title={"Nintendo Switch - Consola Estándar, Color Azul Neón/Rojo Neón"} 
                price={285.00} 
                image="https://m.media-amazon.com/images/I/71U1R-V8+dL._AC_SX679_.jpg"
                rating={1}
            />
        </div>
    </div>
  )
}

export default Home