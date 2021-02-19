import './App.css';
import HomePage from './pages/homepage/homepage.component.jsx';
import SignInSignUp from './pages/signin-signup/signin-signup.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>  
      <Header/>
      <Switch>
        <Route exact path='/' component={ HomePage }></Route>
        <Route path='/shop' component={ ShopPage }></Route>
        <Route path='/signin' component={ SignInSignUp }></Route>
      </Switch>
    </div>
  )
}

export default App;
