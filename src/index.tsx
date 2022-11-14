import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Feed from './components/Pages/Feed/Feed';
import Profile from 'components/Pages/Profile/Porfile';
import ProfileEdit from 'components/Pages/ProfileEdit/ProfileEdit';
import Settings from 'components/Pages/Settings/Settings';
import Login from 'components/Pages/Login/Login';
import Registration from 'components/Pages/Registration/Registration';
import Store from "./store/store";
import RequireAuth from "./components/RequireAuth";

interface State {
    store: Store;
}

const store = new Store();

export const Context = createContext<State>({
    store,
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <Context.Provider value={{store}}>
        <BrowserRouter>
            <Routes>
                <Route element={<App/>}>
                    <Route element={<RequireAuth/>}>
                        <Route index path='/' element={<Feed/>}/>
                        <Route path="profile" element={<Profile/>}/>
                        <Route path="profile/edit" element={<ProfileEdit/>}/>
                        <Route path="settings" element={<Settings/>}/>
                    </Route>

                    <Route path="login" element={<Login/>}/>
                    <Route path="signup" element={<Registration/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    </Context.Provider>
);