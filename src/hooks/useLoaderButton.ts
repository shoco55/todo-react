import { useState } from 'react';

export function useLoaderButton() {
  const [isButtonLoading, setIsLoading] = useState(false);

  const showLoaderButton = () => {
    setIsLoading(true);
  };

  const hideLoaderButton = () => {
    setIsLoading(false);
  };

  return { isButtonLoading, showLoaderButton, hideLoaderButton };
}
