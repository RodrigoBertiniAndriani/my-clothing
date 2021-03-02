import React from 'react';
import { Route } from 'react-router-dom';

import ShopOverview from '../../components/shop-overview/shop-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={ ShopOverview }/>
    <Route path={`${match.path}/:collection`} component={ CollectionPage }/>
  </div>
);

export default ShopPage;