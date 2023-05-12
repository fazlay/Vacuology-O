import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

import theme from './theme/defaultTheme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
<ThemeProvider theme={theme}>
    <div className='App'>
      <AuthProvider>
        <Router>
          <Header></Header>
           <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route  path='home' element={<Home/>}/>
            <Route  path='shop' element={<Shop/>}/>
            <Route  path='login' element={<Login/>}/>
            <Route  path='signup' element={<SignUp/>}/>
            <Route  path='signup' element={<SignUp/>}/>
            <Route  path='signup' element={<SignUp/>}/>
            <Route  path='signup' element={<SignUp/>}/>
            <Route  path='signup' element={<SignUp/>}/>
            <Route  path='signup' element={<SignUp/>}/>
         
            <Route
      path="/products/:id"
      element={<PrivateRoute component={<Purchase />} />}
    />
            <Route
      path="/dashbord"
      element={<PrivateRoute component= {<DashBord/>} />}
    />

        
            <Route path='*' element={<NotFound/>}/>
          </Routes> 
          <Footer></Footer>
        </Router>
        </AuthProvider>
    </div>
 </ThemeProvider>
  );
}

//https://vacuology-server.onrender.com/
export default App;
