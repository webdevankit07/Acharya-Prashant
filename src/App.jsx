import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
import Home from './pages/Home';
import Header from './component/header/Header';
import ErrorPage from './pages/ErrorPage';
import Footer from './component/Footer';

const App = () => {
    return (
        <Router>
            <GlobalStyle />
            <Header />
            <Routes>
                <Route path={'/'} element={<Home />} />
                <Route path={'*'} element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
