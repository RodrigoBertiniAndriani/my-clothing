import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import SignInSignUp from './pages/signin-signup/signin-signup.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch , Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

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
        </Switch>
      </div>
    )
  }
}

// Mapeia as propriedades de estado do root-reducer{user-reducer}
const mapStateToProps = ( state ) => ({
  currentUser: state.user.currentUser
})

// Adiciona uma function nas props que dispara uma action
const mapDispatchToProps = dispatch => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user))
});

// Conecta o estado e as propriedades ao componente
export default connect(mapStateToProps, mapDispatchToProps)(App);
