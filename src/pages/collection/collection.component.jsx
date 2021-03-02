import React from 'react';

import ShopItem from '../../components/shop-item/shop-item.component';

import './collection.styles.scss';

const CollectionPage = ({ match }) => {
    console.log(match.params.categoryId)
    return (
        <div className='collection'>
            <h2>Category</h2>
            <ShopItem/>
        </div>
    )
};

export default CollectionPage;