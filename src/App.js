import React from "react";
import * as ROUTES from "./constants/routes";
import { BrowserRouter } from "react-router-dom";
import { Home, Browse, Signin, Signup } from "./pages";
import { IsUserRedirect, ProtectedRoute } from "./helpers/routes";

function App() {
  const user = false;
  return (
    <BrowserRouter>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_IN}
      >
        <Signin />
      </IsUserRedirect>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGN_UP}
      >
        <Signup />
      </IsUserRedirect>
      <ProtectedRoute user={user} path={ROUTES.BROWSE}>
        <Browse />
      </ProtectedRoute>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.HOME}
      >
        <Home />
      </IsUserRedirect>
    </BrowserRouter>
  );
}

export default App;
