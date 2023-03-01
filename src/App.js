import React from "react";
import "./App.css";
import { ErrorBoundary } from "./helper/components/error-boundary";
import { SuspenseBoundary } from "./helper/components/suspense-boundary";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { lazyRetry } from "./helper/functions/lazyload";
import { routes } from "./constants/routes";

const loadComponent = (component) =>
  lazyRetry(() => import(`./../src/pages/${component}`));

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          {/* <SuspenseBoundary> */}
          <h1>Header............</h1>
          <Routes>
            {routes.map((route) => {
              const Component = loadComponent(route.component);
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  element={
                    <SuspenseBoundary>
                      <Component />
                    </SuspenseBoundary>
                  }
                >
                  {route.subNav &&
                    route.subNav.map((subRoute) => {
                      const SubComponent = loadComponent(`${route.component}/sub-pages/${subRoute.component}`);
                      return (
                        <Route
                          key={subRoute.path}
                          path={subRoute.path}
                          element={
                            <SuspenseBoundary>
                              <SubComponent />
                            </SuspenseBoundary>
                          }
                        />
                      );
                    })}
                </Route>
              );
            })}
          </Routes>
          {/* </SuspenseBoundary> */}
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
