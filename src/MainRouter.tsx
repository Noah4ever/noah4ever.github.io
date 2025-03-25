import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './pages/Home'
import NewHome from "./pages/NewHome";

export function MainRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewHome />} />
      </Routes>
    </BrowserRouter>
  );
}
