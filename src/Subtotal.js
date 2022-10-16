import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';

function Subtotal() {

    const navigate = useNavigate()
    const [{ basket }, dispatch] = useStateValue();


    return (
        <div className='Subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket?.length} items):
                            <strong>{value}</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type="checkbox" />
                            This order contains gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                thousandSpacing='3'
                prefix={"₹"}
            />

            <button onClick={e => navigate('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

