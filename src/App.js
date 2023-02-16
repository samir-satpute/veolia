import React, { Suspense } from "react";
import "./App.css";
import { ErrorBoundary } from "./helper/components/error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { lazyRetry } from "./helper/functions/lazyload";
import { routes } from "./constants/routes";
import { Provider } from "react-redux";
import store from "./store/store"

const loadComponent = (component) =>
  lazyRetry(() => import(`./../src/pages/${component}`));

function App() {
  return (
    <>
      <ErrorBoundary>
        <Provider store={store}>
          <BrowserRouter>
            <Suspense fallback={<h1>Loading...</h1>}>
              <h1>Header............</h1>
              <Routes>
                {routes.map((route) => {
                  const Component = loadComponent(route.component);
                  return (
                    <Route
                      key={route.path}
                      path={route.path}
                      element={<Component />}
                    ></Route>
                  );
                })}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </Provider>
      </ErrorBoundary>
    </>
  );
}

export default App;
