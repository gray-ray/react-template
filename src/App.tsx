import './App.css';
import React, { Suspense } from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router';
import { AuthProvider, WithAccess } from '@/context/AuthProvider';

import routesConfig from '@/routes/index';

function App() {
  const renderRoutes = (routes: any[]) => {
    return routes.map(
      ({ path, component: Component, redirect, children, access }, index) => {
        return (
          <Route
            key={`${path}_${index}`}
            path={path}
            element={
              redirect ? (
                <Navigate to={redirect} replace />
              ) : Component ? (
                <WithAccess accessKey={access}>
                  <Suspense fallback={<div>loading...</div>}>
                    {React.createElement(Component)}
                  </Suspense>
                </WithAccess>
              ) : null
            }
          >
            {children && renderRoutes(children)}
          </Route>
        );
      }
    );
  };

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>{renderRoutes(routesConfig)}</Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
