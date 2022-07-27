import React, { useEffect, useState } from 'react'
import CheckoutProduct from './CheckoutProduct';
import "./Payment.css";
import { useStateValue } from './StateProvider';
import { Link, useHistory } from 'react-router-dom';
import { CardElement, useStripe, useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from "./axios";

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();
    //Elementos de stripe:
    const stripe = useStripe();
    const elements = useElements();

    const [succeded, setSucceded] = useState(false)
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        //Generar lo que nos permite quitar dinero a la cuenta 
        //Cuando el cesto de compra cambie, hara esta request para que cambie el valor que le pasamos a Stripe, así se le cobra al cliente el valor que pertoca.
        const getClientSecret = async () => {
            const response = await axios({
                method: "post",
                // Stripe espera el total en subunidades de currencies.
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])


    console.log("Secret key -->", clientSecret)
    const handleSubmit = async (e) => {
        // Stripe cosas
        e.preventDefault();
        setProcessing(true);
        //^^ Evita que pulses el botón mas de una vez.

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            //paymentIntent = payment confirmation 

            setSucceded(true);
            setError(null)
            setProcessing(false);

            history.replace("/orders")
        })

    }

    const handleChange = e => {
        //Esta función escucha los cambios del CardElement
        // Y enseña los diferentes errores al cliente mientras escribe sus datos bancarios.
        setDisabled(e.empty);
        //^^ Si este evento está vacio, desactiva el boton.
        setError(e.error ? e.error.message : "");
        //^^ Si hay un error, enseñalo. Si no, no enseñes nada.
    }

  return (
    <div className='payment'>
        <div className='payment__container'>
            <h1>
                Checkout (
                    <Link to="/checkout">{basket?.length} items</Link>
                    )
            </h1>
            {/* Payment section - Delivery address */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                <div className='payment__address'>
                    <p>{user?.email}</p>
                    <p>Example street 123</p>
                    <p>Blanes, 17300</p>
                </div>
            </div>
            {/* Payment section - Review Items */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Review items and delivery</h3>
                </div>
                <div className='payment__items'>
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
            {/* Payment section - Payment method */}
            <div className='payment__section'>
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>
                <div className='payment__details'>
                        {/* Aquí van las cosas de stripe */}

                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>

                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"€"}
                                />
                                    <button disabled={processing || disabled || succeded}>
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                    </button>
                            </div>
                            {error && <div>{error}</div>}
                        </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment