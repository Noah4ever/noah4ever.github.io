import { useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToHashElement() {
  const { hash } = useLocation();

  const hashElement = useMemo(() => {
    if (hash) {
      return document.getElementById(hash.slice(1));
    } else {
      return null;
    }
  }, [hash]);

  useEffect(() => {
    if (hashElement) {
      hashElement.scrollIntoView({
        inline: "nearest",
      });
    }
  }, [hashElement]);

  return null;
}
