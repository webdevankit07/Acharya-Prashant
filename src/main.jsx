import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import Store from './store/Store.jsx';
import { ThemeProvider } from 'styled-components';

const theme = {
    mainTheme: '#d24115',
    lightTheme: '#f64d1a',
    footer_bg: '#0F172A',
    heading: 'rgb(24 24 29)',
    black: ' #212529',
    shadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;',
    shadowSupport: ' rgba(0, 0, 0, 0.16) 0px 1px 4px',
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={Store}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </Provider>
);
