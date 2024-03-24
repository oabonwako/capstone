//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './components/HomePage';
import ConfirmedBooking from './components/ConfirmedBooking';
import BookingPage from './components/BookingPage';
import Footer from './components/Footer';
//import Main from './components/Main';

function App() {
  return(
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/booking" element={<BookingPage/>}></Route>
        <Route path="/confirmed-booking" element={<ConfirmedBooking/>}></Route>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
