import React from 'react'
import './Product.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();

    console.log('this is the basket ->', basket);
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };

    return (
        <div className='Product'>
            <img src={image} alt='coffee cup img'></img>
            <div className='product_info'>
                <p className='product_description'>{title}</p>
                <p className='product_price'>
                    <small><CurrencyRupeeIcon /></small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}

                </div>
            </div>
            <button onClick={addToBasket}>
                Add to cart
            </button>
        </div>
    )
}

export default Product