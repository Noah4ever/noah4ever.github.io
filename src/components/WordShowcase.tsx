import "animate.css";
import "@styles/word-showcase.scss";
import { useEffect, useRef, useState } from "react";

export default function WordShowcase({
  words,
  random,
}: {
  readonly words: readonly string[];
  readonly random?: boolean;
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const textRef = useRef<any>(null);

  const flipDuration: number = 500;
  const wordDuration: number = 2500;
  const animationIn: string = "animate__flipInX";
  const animationOut: string = "animate__flipOutX";

  useEffect(() => {
    function change() {
      textRef.current?.classList.remove(animationIn);
      textRef.current?.classList.add(animationOut);

      setTimeout(() => {
        let newIndex;
        do {
          // the new index should be different from the current index
          newIndex = random
            ? Math.floor(Math.random() * words.length)
            : (currentWordIndex + 1) % words.length;
        } while (newIndex === currentWordIndex);
        setCurrentWordIndex(newIndex);
        textRef.current?.classList.remove(animationOut);
        textRef.current?.classList.add(animationIn);
      }, flipDuration);
    }

    const intervalId = setInterval(change, wordDuration);

    return () => {
      clearInterval(intervalId);
    };
  }, [words, random, currentWordIndex]);

  return (
    <div
      className={`word-showcase-container animate__animated ${animationIn}}`}
      ref={textRef}
    >
      {words[currentWordIndex]}
    </div>
  );
}
