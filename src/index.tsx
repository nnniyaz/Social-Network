import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';
import {Feed, FeedLoader} from './pages/Feed/Feed';
import {Profile, ProfileLoader} from 'pages/Profile/Profile';
import ProfileEdit from 'pages/ProfileEdit/ProfileEdit';
import Settings from 'pages/Settings/Settings';
import Login from 'pages/Login/Login';
import Registration from 'pages/Registration/Registration';
import Store from "./store/store";
import RequireAuth from "./components/RequireAuth";
import CheckAuth from "./components/CheckAuth";

interface State {
    store: Store;
}

const store = new Store();

export const Context = createContext<State>({
    store,
});

const router = createBrowserRouter(createRoutesFromElements(
    <Route element={<App/>}>
        <Route element={<RequireAuth/>}>
            <Route index path='/' element={<Feed/>} loader={FeedLoader}/>
            <Route path="profile/:id" element={<Profile/>} loader={ProfileLoader}/>
            <Route path="profile/:id/edit" element={<ProfileEdit/>}/>
            <Route path="settings" element={<Settings/>}/>
        </Route>

        <Route element={<CheckAuth/>}>
            <Route index path="login" element={<Login/>}/>
            <Route path="signup" element={<Registration/>}/>
        </Route>
    </Route>
))

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        <Context.Provider value={{store}}>
            <RouterProvider router={router}/>
        </Context.Provider>
    </React.StrictMode>
);