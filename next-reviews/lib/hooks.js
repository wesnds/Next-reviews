import { useEffect, useState } from "react";

// check if we're on the client side
export function useIsClient() {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  return isClient;
}

export function useFormState(action) {
  const [state, setState] = useState({ loading: false, error: null });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ loading: true, error: null });

    const result = await action(new FormData(event.currentTarget));
    if (result?.isError) {
      setState({ loading: false, error: result });
    } else {
      event.target.reset();
      setState({ loading: false, error: null });
    }
  };
  return [state, handleSubmit];
}
