import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './pages/auth/login';
import HomePage from './pages/home/homepage';
import Layout from './routes/base_template';
import AuctionRouter from './routes/auction/AuctionRouter';
import 'bootstrap';
import BaseRouter from './routes/BaseRouter';
import AuthPages from './routes/authPages';
import SignUpPageBidder from './pages/auth/signupBidder';
import SignUpPageVendor from './pages/auth/signupVendor';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< Layout />} >
            <Route index element={< HomePage />} />
            <Route path="auth">
                <Route path="login" element={< LoginPage />} />
                <Route path='signup' >
                  <Route path='bidder' element={< SignUpPageBidder />} />
                  <Route path='vendor' element={< SignUpPageVendor />} />
                </Route>
            </Route>
            <Route path="auctions" element={< AuctionRouter />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
