import React from 'react';
import { connect } from 'react-redux';
import { selectMappedShopObject }  from '../../redux/shop/shop.selector';
import './shop-overview.styles.scss';
import ShopPreview from '../../components/shop-preview/shop-preview.component';

const ShopOverview = ({ shop }) => (
    <div className='shop-overview'>
        {
            shop.map(({ id, ...otherProps }) => (
                <ShopPreview key={id} {...otherProps} />
        ))}
    </div>
)

const mapStateToProps = ( state ) => ({
    shop: selectMappedShopObject(state)
})

export default connect(mapStateToProps)(ShopOverview);