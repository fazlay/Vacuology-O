import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Shop from "./page/Shop/Shop";
import Login from "./page/Login/Login";
import SignUp from "./page/SignUp/SignUp";
import Header from "./component/Header/Header";
import AuthProvider from "./component/contexts/AuthProvider/AuthProvider";
import Purchase from "./page/Purchase/Purchase";
import DashBord from "./page/DashBord/DashBord";
import PrivateRoute from "./component/PrivetRoute/PrivetRoute";
import Footer from "./page/Footer/Footer";
import NotFound from "./page/NotFound/NotFound";

import theme from "./theme/defaultTheme";
import { ThemeProvider } from "@mui/material/styles";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe('pk_test_51N9qRYGFm1wEu19JkhOS1YZTcH8UVXRt5L1nV4VwVLdFANFBCBl6DMXtuIt7ddzleSxSbvVdNUDjXinS3c0c2aEl00JSTj2DEi');
function App() {
  const options = {
    // passing the client secret obtained from the server
    clientSecret: 'pk_test_51N9qRYGFm1wEu19JkhOS1YZTcH8UVXRt5L1nV4VwVLdFANFBCBl6DMXtuIt7ddzleSxSbvVdNUDjXinS3c0c2aEl00JSTj2DEi',
  };
  return (
    <Elements stripe={stripePromise} >
    <ThemeProvider theme={theme}>
      <div className="App">
        <AuthProvider>
          <Router>
            <Header></Header>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="shop" element={<Shop />} />
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<SignUp />} />
            

              <Route path="/*" element={<PrivateRoute />}>
                <Route path="products/:id" element={<Purchase />} />
                <Route path="dashbord" element={<DashBord />} />
              </Route>

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer></Footer>
          </Router>
        </AuthProvider>
      </div>
      </ThemeProvider>
      </Elements>
  );
}


export default App;
