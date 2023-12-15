import axios from 'axios';
import { useState, useEffect } from 'react';

import { ShmupRecord } from '^/types';
import { getAPIURL } from '^/utils/api-url';

export function useShmupArticle(
  endpointName: string,
  currentRecordId?: string
) {
  const [recordArticle, setRecordArticle] = useState<ShmupRecord>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    setRecordArticle(undefined);
    if (currentRecordId === undefined) {
      return;
    }
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get<ShmupRecord>(
          getAPIURL('records', endpointName, currentRecordId)
        );
        setRecordArticle({
          ...response.data,
          when: new Date(response.data.when),
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setRecordArticle(undefined);
          setIsError(true);
        }
      }
      setIsLoading(false);
    })();
  }, [endpointName, currentRecordId]);

  return {
    recordArticle,
    isLoading,
    isError,
  };
}
