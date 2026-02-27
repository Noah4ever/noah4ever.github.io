import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLayout from "./components/ProjectLayout";
import Giftboard from "./pages/projects/Giftboard";
import CustomPartyApp from "./pages/projects/CustomPartyApp";
import Nolicom from "./pages/projects/Nolicom";
import ChatGPTBooster from "./pages/projects/ChatGPTBooster";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectLayout />}>
          <Route path="giftboard" element={<Giftboard />} />
          <Route path="custom-party-app" element={<CustomPartyApp />} />
          <Route path="nolicom" element={<Nolicom />} />
          <Route path="chatgpt-speed-booster" element={<ChatGPTBooster />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
