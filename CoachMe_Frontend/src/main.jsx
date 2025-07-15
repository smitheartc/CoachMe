import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter} from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

// TODO: Replace these with your Auth0 values
const domain = "dev-21h8qo240pxiepsp.us.auth0.com"; // e.g., dev-xxxxxx.us.auth0.com
const clientId = "9O1YVwsQuJ5umyPZQJ1fFV9sf6SLgRD1";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>,
)