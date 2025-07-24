import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.tsx";
import AuthCallbackPage from "./pages/authCallback/AuthCallbackPage.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./components/layout/MainLayout.tsx";
import ChatPage from "./pages/chat/ChatPage.tsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route
          path="/sso-callback"
          element={
            <AuthenticateWithRedirectCallback
              signUpForceRedirectUrl={"/auth-callback"}
            />
          }
        />
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
