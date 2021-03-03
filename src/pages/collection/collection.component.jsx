import React from 'react';
import ShopItem from '../../components/shop-item/shop-item.component';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector';

import './collection.styles.scss';

const CollectionPage = ({shop}) => {
    console.log("SHOP: " + Object.values(shop))
    const { title, items } = shop;

    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {items.map(item => (
                    <ShopItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
};

const mapStateToProps = (state, props) => ({
    shop: selectCollection(props.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);