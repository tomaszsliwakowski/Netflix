import React, { useEffect } from "react";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";

export function IsUserRedirect({ user, loggedInPath, children, ...rest }) {
  const Navigate = useNavigate();

  useEffect(() => {
    if (user) {
      Navigate(loggedInPath);
    }
  }, []);

  return (
    <Routes>
      <Route {...rest} element={children} />
    </Routes>
  );
}

export function ProtectedRoute({ user, children, ...rest }) {
  const Navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!user && location.pathname === "/browse") {
      Navigate("signin", { state: { from: location.pathname } });
    }
  }, []);

  return (
    <Routes>
      <Route {...rest} element={children} />
    </Routes>
  );
}
