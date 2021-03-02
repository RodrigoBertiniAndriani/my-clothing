import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions.js';
import './shop-item.styles.scss';

const ShopItem = ({item, addItem}) => {
    const { name, price, imageUrl } = item;

    return (
        <div className="shop-item">
            <div 
                className="image" 
                style={{backgroundImage: `url(${imageUrl})`}}
            ></div>
            <div className="shop-footer">
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton 
                onClick={() => addItem(item)} 
                inverted
            > 
                Add to Cart 
            </CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(ShopItem);