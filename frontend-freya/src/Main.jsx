import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js'; // Asegúrate de que la ruta es correcta
import { App } from './App.jsx';
import { UserProvider } from './context/UserContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <UserProvider>
          <App/>
        </UserProvider>  
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
