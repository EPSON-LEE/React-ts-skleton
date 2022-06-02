import React from 'react';
import Home from './pages/Home'
import List from './pages/List'
import Detail from './pages/Detail'
import { useRoutes,} from "react-router-dom";
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';

// Variable path must be the same as variable key
const menuItems = [
    {
        path: '/',
        key: '/',
        label: 'Home',
        element: <Home />,
        icon: <UserOutlined />
    },
    {
        path: '/list',
        key: '/list',
        label: 'list',
        element: <List />,
        icon: <VideoCameraOutlined />,
    },
    {
        path: '/detail',
        key: '/detail',
        label: 'detail',
        element: <Detail />,
        icon: <UploadOutlined />,
    },
]



const AppRoutes: React.FC = () => {
    const routes = useRoutes(menuItems)
    return routes;
}


export {
    AppRoutes,
    menuItems
}

