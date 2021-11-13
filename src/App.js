import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import Shop from './page/Shop/Shop';
import Login from './page/Login/Login';
import SignUp from './page/SignUp/SignUp';
import Header from './component/Header/Header';
import AuthProvider from './component/contexts/AuthProvider/AuthProvider';
import Purchase from './page/Purchase/Purchase';
import DashBord from './page/DashBord/DashBord';
import PrivateRoute from './component/PrivetRoute/PrivetRoute';
import Footer from './page/Footer/Footer';
import NotFound from './page/NotFound/NotFound';

function App() {
  return (
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/shop'>
              <Shop></Shop>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/signup'>
              <SignUp></SignUp>
            </Route>
            <PrivateRoute path='/products/:id'>
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path='/dashbord'>
              <DashBord></DashBord>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

//https://fathomless-sands-30445.herokuapp.com/
export default App;
