import BlobImage from "@components/BlobImage";
import "@styles/welcome.scss";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <p>
        Hey, I'm <span className="welcome-name">Noah</span>! A software
        developer.
      </p>
      <BlobImage />
    </div>
  );
}
