import Footer from 'components/Footer/Footer';
import MobileNav from 'components/MobileNav/MobileNav';
import {Outlet} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import {Context} from "./index";
import {useContext, useEffect} from "react";
import {observer} from "mobx-react-lite";

function App() {
    const {store} = useContext(Context);

    useEffect(() => {
        if (localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])

    if (store.isLoading) {
        return <div>Loading...</div>
    }

    return (
        <div className="App">
            <Header/>
            <div className='content'>
                <Outlet/>
            </div>
            <Footer/>
            <MobileNav/>
        </div>
    );
}

export default observer(App);
