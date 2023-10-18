import BlobImage from "@/components/BlobImage";
import Header from "../components/Header";
import "@styles/app.scss";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <BlobImage />
    </div>
  );
}
