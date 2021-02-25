import React from 'react';
import PreviewCollection from '../../components/preview-collection/preview-collection.component';
import { connect } from 'react-redux';

const ShopPage = (props) => (
    <div className='shop-page'>
    {   
        props.item.map(({id, ...otherCollectionProps}) => (
            <PreviewCollection 
                key={id} 
                {...otherCollectionProps}
            />
        ))
    }
    </div>
)

const mapStateToProps = ( state ) => ({
    item: state.shopItem.item
})
  
export default connect(mapStateToProps)(ShopPage);