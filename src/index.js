import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContexProvider} from "./contex/AuthContext";
import { ChatContextProvider} from "./contex/ChatContext";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContexProvider>
    <ChatContextProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContexProvider>

);
