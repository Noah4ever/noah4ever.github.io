import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home'
import Home from "./pages/Home";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
