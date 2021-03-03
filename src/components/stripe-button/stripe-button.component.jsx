import React from 'react';

import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IR0iBDMZJZA5drKIs8oiTrqJn0dnXX8zRAJxl65yXGDQdDmUqfxoeg5dYCuUkncuNcCENQdmqJZ0xRRIPCWbgS100tiFInZrY'

    const onToken = token => {
        console.log(token);
        alert('Pagamento realizado!')
    }

    return (
        <StripeCheckout
            label='Pagar'
            name='My Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`O valor total é de R$ ${price}`}
            amount={priceForStripe}
            panelLabel='Pagar'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;