import "@styles/welcome.scss";
import BlobImage from "@components/BlobImage";
import WordShowcase from "./WordShowcase";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome-container-title">
        Hey, I'm <span className="welcome-name">Noah</span>! A{" "}
        <WordShowcase
          words={[
            "web developer.",
            "react native developer.",
            "frontend stack developer.",
            "software developer.",
            "react developer.",
            "full stack developer.",
            "mobile developer.",
            "backend stack developer.",
          ]}
        />
      </div>
      <BlobImage />
    </div>
  );
}
