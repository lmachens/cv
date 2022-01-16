import { useEffect, useState } from "react";

function useWritingState(initialValue) {
  const [value, setValue] = useState(initialValue);
  const [end, setEnd] = useState(0);
  const [nextValue, setNextValue] = useState(initialValue);

  useEffect(() => {
    const direction = value === nextValue ? 1 : -1;
    if (direction === 1 && end >= value.length) {
      return;
    }
    if (direction === -1 && end <= 0) {
      setValue(nextValue);
      return;
    }

    const delay = end === 0 ? 1000 : 30;
    const timeoutId = setTimeout(() => {
      setEnd((end) => end + direction);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, nextValue, end]);

  const partialValue = value.substring(0, end);
  return [partialValue, setNextValue];
}

export default useWritingState;
