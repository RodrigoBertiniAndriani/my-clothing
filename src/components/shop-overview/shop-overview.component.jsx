import React from 'react';
import { connect } from 'react-redux';
import { selectShop }  from '../../redux/shop/shop.selector';
import PreviewShop from '../../components/shop-preview/shop-preview.component';
import './shop-overview.styles.scss';

const ShopOverview = ({ shop }) => (
    <div className='shop-overview'>
        {shop.map(({ id, ...otherProps }) => (
            <PreviewShop key={id} {...otherProps} />
        ))}
    </div>
)

const mapPropToState = ( state ) => ({
    shop: selectShop(state)
})

export default connect(mapPropToState)(ShopOverview);