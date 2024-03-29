
import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Category from "../../pages/Category/Category/Category";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login/Login";
import Register from "../../pages/Login/Register/Register";
import News from "../../pages/News/News/News";
import Profile from "../../pages/Other/Profile/Profile";
import TarnsAndCondition from "../../pages/Other/TarnsAndCondition/TarnsAndCondition";
import PrivetRoute from "../PrivetRoute/PrivetRoute";


export const routes = createBrowserRouter([
    {
        path: '',
        element: <Main />,
        children:[
            {
                path: '',
                element: <Home />,
                loader: () => fetch('https://modul-60-dragon-news-server.vercel.app/news')
            },
            {
                path: 'category/:id',
                element: <Category />,
                loader: ({params}) => fetch(`https://modul-60-dragon-news-server.vercel.app/category/${params.id}`)
            },
            {
                path: 'news/:id',
                element: <PrivetRoute><News /></PrivetRoute>,
                loader: ({params}) => fetch(`https://modul-60-dragon-news-server.vercel.app/news/${params.id}`)
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms',
                element: <TarnsAndCondition />
            },
            {
                path: 'profile',
                element: <PrivetRoute><Profile></Profile></PrivetRoute>,
            },
        ]
    }
])