import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLayout from "./components/ProjectLayout";
import Giftboard from "./pages/projects/Giftboard";
import CustomPartyApp from "./pages/projects/CustomPartyApp";
import Nolicom from "./pages/projects/Nolicom";
import AIChatSpeedBooster from "./pages/projects/AIChatSpeedBooster";
import SSHConfigLint from "./pages/projects/SSHConfigLint";
import NodeRunner from "./pages/projects/NodeRunner";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectLayout />}>
          <Route path="giftboard" element={<Giftboard />} />
          <Route path="custom-party-app" element={<CustomPartyApp />} />
          <Route path="nolicom" element={<Nolicom />} />
          <Route
            path="ai-chat-speed-booster"
            element={<AIChatSpeedBooster />}
          />
          <Route path="sshconfig-lint" element={<SSHConfigLint />} />
          <Route path="node-runner" element={<NodeRunner />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
