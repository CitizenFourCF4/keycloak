import React from 'react'
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/home-page/HomePage'
import SecretPage from './pages/secret-page/SecretPage'
import NotFoundPage from './pages/not-found-page/NotFoundPage'
import Nav from './components/Nav'
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './Keycloack'
import PrivateRoute from './helpers/privateRoute'


const Links = () => {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
        <Nav />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route
             path="/secret"
             element={
               <PrivateRoute>
                 <SecretPage />
               </PrivateRoute>
             }
           />
          <Route path="*" element={<NotFoundPage />}/>
        </Routes>
      </ReactKeycloakProvider>
    </div>
  )
}

export default Links