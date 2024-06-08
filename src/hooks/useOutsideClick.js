import { useEffect, useRef } from "react";

export function useOutsideClick(handler, listenCapturing = true) {
  //click outside the modal use a ref

  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        //if the ref.current does not contain the event that was clicked close the modal
        if (ref.current && !ref.current.contains(e.target)) handler();
      }
      document.addEventListener("click", handleClick, listenCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listenCapturing);
    },
    [handler, listenCapturing]
  );

  return ref;
}
