import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage.tsx";
import AuthCallbackPage from "./pages/authCallback/AuthCallbackPage.tsx";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/auth-callback" element={<AuthCallbackPage />} />
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
