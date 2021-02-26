import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import { selectCartItems } from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Produto</span>
            </div>
            <div className='header-block'>
                <span>Descrição</span>
            </div>
            <div className='header-block'>
                <span>Quantidade</span>
            </div>
            <div className='header-block'>
                <span>Preço</span>
            </div>
            <div className='header-block'>
                <span>Remover</span>
            </div>
        </div>
        {cartItems.map(cartItem => 
            <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
        )}
        
        <div className='total'>
            <span>TOTAL: ${total}</span>
        </div>
    </div>
)

const mapStateToProps = (state) => ({
    cartItems: selectCartItems(state),
    total: selectCartItems(state).reduce(
        (acc, cartItem) =>
            acc + cartItem.quantity * cartItem.price,
        0
    )
})

export default connect(mapStateToProps)(CheckoutPage);