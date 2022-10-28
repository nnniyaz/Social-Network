import Footer from 'components/Footer/Footer';
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
    </div>
  );
}

export default App;
