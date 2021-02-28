import './App.css';

import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import CheckoutPage from './pages/checkout/checkout.component.jsx';
import SignInSignUp from './pages/signin-signup/signin-signup.component.jsx';

import { Component } from 'react';
import Header from './components/header/header.component.jsx';

import { Route, Switch , Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';

class App extends Component{
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      setCurrentUser( userAuth );
    })
  }
  
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>  
        <Header/>
        <Switch>
          <Route exact path='/' component={ HomePage }></Route>
          <Route path='/shop' component={ ShopPage }></Route>
          <Route 
            exact 
            path='/signin' 
            render={() => 
              this.props.currentUser 
                ? (<Redirect to='/'/>) 
                : (<SignInSignUp/>)
            }
          />
          <Route exact path='/checkout' component={ CheckoutPage }></Route>
        </Switch>
      </div>
    )
  }
}

// Mapeia as propriedades de estado do root-reducer{user-reducer}
const mapStateToProps = ( state ) => ({
  currentUser: selectCurrentUser(state)
})

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser
// })

// Adiciona uma function nas props que dispara uma action
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

// Conecta o estado e as propriedades ao componente
export default connect(mapStateToProps, mapDispatchToProps)(App);
