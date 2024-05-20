
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Your home component
// import About from './components/About'; // Your about component

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                {/* <Route path="/about" component={About} /> */}
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
