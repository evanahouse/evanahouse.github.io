import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

const useTypedEffect = (strings: any) => {
    console.log("enter")
  const [showButton, setShowButton] = useState(false);
  const el = useRef(null);
  const typedRef = useRef<Typed | null>(null);

  useEffect(() => {
    const options = {
      strings,
      startDelay: 200,
      typeSpeed: 25,
      backSpeed: 100,
      backDelay: 1000,
      smartBackspace: true,
      loop: false,
      showCursor: false,
      cursorChar: "!",
      onComplete: () => {
        setShowButton(true);
      },
    };

    return () => {
      typedRef.current?.destroy();
    };
  }, [strings]);

  return { el, showButton };
};

export default useTypedEffect;
