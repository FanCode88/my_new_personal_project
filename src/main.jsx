import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import NewPaswword from './components/newPassword/newPassword';
import User from './pages/User/UserPage';
import Services from './components/Services/Services';
import About from './components/About/About';
import Contact from './pages/Contact/Contact';
import Communications from './pages/Communications/Communications';
import InspiredDesign from './pages/InspiredDesign/InspiredDesign';
import HappyCustomers from './pages/HappyCustomers/HappyCustomers';
import Creativity from './pages/Creativity/Creativity';
import Technology from './pages/Technology/Technology';
import Collaboration from './pages/Collaboration/Collaboration';
import DiscoverMore from './pages/DiscoverMore/DiscoverMore';
import Productivity from './pages/Productivity/Productivity';
import Tech from './pages/Tech/Tech';
import Assets from './pages/Assets/Assets';
import AInteligence from './pages/AI/AInteligence';
import Web3 from './pages/Web3/Web3';
import Demo from './pages/Demo/Demo';
import Features from './pages/Features/Features';
import Introduction from './pages/Introduction/Introduction';
import DesignTools from './pages/DesignTools/DesignTools';
import DevelopmentTools from './pages/DevelopmentTools/DevelopmentTools';

const router = createBrowserRouter([
    {
        element: '',
        children: [
            {
                path: '/',
                element: <Navigate to="/home" replace />,
            },
            {
                path: '/home',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
            {
                path: '/forgot-password',
                element: <ForgotPassword />,
            },
            {
                path: '/new-password',
                element: <NewPaswword />,
            },
            {
                path: '/profile',
                element: <User />,
            },
            {
                path: '/services',
                element: <Services />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/services/communications',
                element: <Communications />,
            },
            {
                path: '/services/inspired-design',
                element: <InspiredDesign />,
            },
            {
                path: '/services/happy-customers',
                element: <HappyCustomers />,
            },
            {
                path: '/about/creativity',
                element: <Creativity />,
            },
            {
                path: '/about/technology',
                element: <Technology />,
            },
            {
                path: '/about/collaboration',
                element: <Collaboration />,
            },
            {
                path: '/about/technology/more',
                element: <DiscoverMore />,
            },
            {
                path: '/services/inspired-design/productivity',
                element: <Productivity />,
            },
            {
                path: '/services/inspired-design/tech',
                element: <Tech />,
            },
            {
                path: '/services/inspired-design/assets',
                element: <Assets />,
            },
            {
                path: '/services/inspired-design/ai',
                element: <AInteligence />,
            },
            {
                path: '/services/inspired-design/web3',
                element: <Web3 />,
            },
            {
                path: '/services/inspired-design/web3/interactive',
                element: <Demo />,
            },
            {
                path: '/services/inspired-design/web3/features',
                element: <Features />,
            },
            {
                path: '/services/inspired-design/web3/introduction',
                element: <Introduction />,
            },
            {
                path: '/services/inspired-design/design-tools',
                element: <DesignTools />,
            },
            {
                path: '/services/inspired-design/development-tools',
                element: <DevelopmentTools />,
            },
        ],
    },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>
);
