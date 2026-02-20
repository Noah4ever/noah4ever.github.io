import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectLayout from "./components/ProjectLayout";
import Giftboard from "./pages/projects/Giftboard";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectLayout />}>
          <Route path="giftboard" element={<Giftboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
