import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.tsx";
import AuthCallbackPage from "./pages/authCallback/AuthCallbackPage.tsx";
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react";
import MainLayout from "./components/layout/MainLayout.tsx";
import ChatPage from "./pages/chat/ChatPage.tsx";
import AlbumPage from "./pages/albums/AlbumPage.tsx";

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
          <Route path="/albums/:albumId" element={<AlbumPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
