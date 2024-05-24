
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home'; // Your home component
// import About from './components/About'; // Your about component
import ProductsDetail from '../pages/ProductDetail'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/product/:id" element={<ProductsDetail />} />
                {/* Add more routes as needed */}
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
