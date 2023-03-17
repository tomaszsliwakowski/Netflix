import React from "react";
import { Route, Navigate, Routes, useNavigate } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  const Navigate = useNavigate();

  if (user) {
    Navigate(loggedInPath);
  }
  if (!user) {
    return (
      <Routes>
        <Route {...rest} element={children} />
      </Routes>
    );
  }
}

export function ProtectedRoute({ user, children, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        render={({ location }) => {
          if (user) {
            return children;
          }

          if (!user) {
            return (
              <Navigate
                to={{
                  pathname: "signin",
                  state: { from: location },
                }}
              />
            );
          }

          return null;
        }}
      />
    </Routes>
  );
}
