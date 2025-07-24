import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.tsx";
import AuthCallbackPage from "./pages/authCallback/AuthCallbackPage.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"} />} />
      </Routes>
    </>
  );
};

export default App;
