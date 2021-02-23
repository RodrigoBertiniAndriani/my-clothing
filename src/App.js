import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import SignInSignUp from './pages/signin-signup/signin-signup.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import WorkerPage from './pages/worker/worker-page.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';

class App extends Component{
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }
  
  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.signin();
  }

  signin = () => {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        
        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
          }})
          console.log(this.state);
        })
      }
      this.setState({ currentUser: userAuth });
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div>  
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={ HomePage }></Route>
          <Route path='/shop' component={ ShopPage }></Route>
          <Route path='/signin' component={ SignInSignUp }></Route>
          <Route path='/testes' component={ WorkerPage }></Route>
        </Switch>
      </div>
    )
  }
}

export default App;
