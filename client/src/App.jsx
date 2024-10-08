import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Register from './pages/Register';
import Logout from './pages/Logout';
import NewEntry from './pages/NewEntry';
import Home from './pages/Home';
import Header from './components/Header.jsx';
import PreHome from './pages/PreHome.jsx';
import ViewEntry from './pages/ViewEntry.jsx';
import DummyHeader from './components/DummyHeader.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<><Header /><PreHome /></>} />
          <Route path='/home' element={<><Header /><Home /></>} />
          <Route path='/login' element={<><DummyHeader /><Login /></>} />
          <Route path='/register' element={<><DummyHeader /><Register /></>} />
          <Route path='/logout' element={<><Header /><Logout /></>} />
          <Route path='/newEntry' element={<><Header /><NewEntry /></>} />
          <Route path='/viewEntry' element={<><Header /><ViewEntry /></>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
