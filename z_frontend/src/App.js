import logo from './logo.svg';
import './App.css';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import LoginPage from './routes/login';
import HomePage from './routes/homepage';
import Layout from './routes/base_template';
import AuctionRouter from './features/auction/AuctionRouter';
import 'bootstrap';
import AuthPages from './routes/authPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path='/auctions' element={<AuctionRouter />}/>
          </Route>
          <Route path = '/login' element={<AuthPages />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
