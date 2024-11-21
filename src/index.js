import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import App from './App';
import useAuthentication from './useAuthentication';
import { Provider } from 'react-redux';
import store from "./store";


function ConnectedApp() {
  const { AuthProvider } = useAuthentication();
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <Provider store={store}><ConnectedApp /></Provider>
  </React.StrictMode>
);

