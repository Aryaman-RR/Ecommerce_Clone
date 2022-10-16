import React from 'react'
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='Home'>
            <div className='home_container'>
                <img className='home_img' src='https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/SYED/Flight_PC_Hero_3000x1200_April._CB629259728_.jpg' alt='amazon home background img' ></img>

                <div className='home_row'>
                    {/* Product */}
                    <Product
                        id='12321341'
                        title='Coffee cup'
                        price={20.00}
                        image='https://m.media-amazon.com/images/I/41aWptTsYpL._SX355_.jpg'
                        rating={4}
                    />
                    {/* Product */}
                    <Product
                        id='49538094'
                        title='Nivia 3934 Ashtang Football Turf Shoes for Mens'
                        price={1200.00}
                        image='https://m.media-amazon.com/images/I/71k-Ud45FYL._UL1500_.jpg://m.media-amazon.com/images/I/41aWptTsYpL._SX355_.jpg'
                        rating={4}
                    />
                    {/* Product */}
                    <Product
                        id='4903850'
                        title='OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)'
                        price={25000.00}
                        image='https://m.media-amazon.com/images/I/619n6kxuGsL._SL1500_.jpg'
                        rating={4}
                    />

                </div>

                <div className='home_row'>
                    {/* Product */}
                    <Product
                        id='23445930'
                        title='Gaiatop Small Table Fan, 6.5 Inch, 3 Speeds Portable Mini Powerful Desktop Table Fan (Black leaf)'
                        price={850.00}
                        image='https://m.media-amazon.com/images/I/71VCxuyXp0L._SL1500_.jpg'
                        rating={5}
                    />
                    {/* Product */}
                    <Product
                        id='3254354345'
                        title='Two Seater Sofa Grey -Cum Bed for Home-Jute Fabric with 2 Cushion (Zigzag Pattern)'
                        price={15000.00}
                        image='https://m.media-amazon.com/images/I/61KaQwxEsTL._SL1000_.jpg'
                        rating={4}
                    />

                </div>

                <div className='home_row'>
                    {/* Product */}
                    <Product
                        id='90829332'
                        title='Sony Bravia 164 cm (65 inches) XR Series 4K Ultra HD Smart OLED Google TV XR-65A80K (Black)'
                        price={250850.00}
                        image='https://m.media-amazon.com/images/I/81sFUK4Sv0L._SL1500_.jpg'
                        rating={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home