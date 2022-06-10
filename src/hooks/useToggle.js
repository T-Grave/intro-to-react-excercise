import { useState } from "react";

export function useToggle(initialValue) {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState((state) => !state);
  };

  return [state, toggle];
}
