import React from 'react'
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {

    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='Checkout'>
            <div className='checkout_left'>
                {/* <img className='checkout_ad' src=''></img> */}
                <div>
                    <h3 className='checkout_userMail'>
                        Hello, {user ? user?.email : "Guest"}
                    </h3>
                    <h2 className='checkout_title'> Your Basket </h2>
                    {/* Basket Item */}
                    {basket.map(item => (
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}

                </div>
            </div>

            <div className='checkout_right'>
                <h2 className='checkoutRight_title'>The subtotal will be:</h2>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout