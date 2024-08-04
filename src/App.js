import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import User from './components/User';
import Users from './components/Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<User/>}></Route>
          <Route path='/showUsers' element={<Users/>}></Route>
        </Routes>
        <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
