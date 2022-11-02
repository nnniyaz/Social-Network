import Footer from 'components/Footer/Footer';
import MobileNav from 'components/MobileNav/MobileNav';
import { Outlet } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Outlet />
      </div>
      <Footer />
      <MobileNav />
    </div>
  );
}

export default App;
