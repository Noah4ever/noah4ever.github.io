import "animate.css";
import "@styles/word-showcase.scss";
import { useEffect, useRef, useState } from "react";

export default function WordShowcase({
  words,
}: {
  readonly words: readonly string[];
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = useRef<any>(null);

  const flipDuration: number = 500;
  const wordDuration: number = 2500;
  const animationIn: string = "animate__flipInX";
  const animationOut: string = "animate__flipOutX";

  useEffect(() => {
    const change = setInterval(() => {
      textRef.current?.classList.remove(animationIn);
      textRef.current?.classList.add(animationOut);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        textRef.current?.classList.remove(animationOut);
        textRef.current?.classList.add(animationIn);
      }, flipDuration);
    }, wordDuration);

    return () => {
      clearInterval(change);
    };
  }, [words]);

  return (
    <div
      className={`word-showcase-container animate__animated ${animationIn}}`}
      ref={textRef}
    >
      {words[currentWordIndex]}
    </div>
  );
}
