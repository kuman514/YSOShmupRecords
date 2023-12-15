import axios from 'axios';
import { useEffect, useState } from 'react';

import { getAPIURL } from '^/utils/api-url';

export function useShmupRecordIds(endpointName: string) {
  const [savedTypeId, setSavedTypeId] = useState<string>('');
  const [recordIds, setRecordIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setRecordIds([]);
      setIsError(false);
      setIsLoading(true);

      try {
        const response = await axios.get<string[]>(
          getAPIURL('records', endpointName, 'selection')
        );
        setRecordIds(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setRecordIds([]);
          setIsError(true);
        }
      }

      /**
       * Save shmup record list type id after the request ended
       */
      setSavedTypeId(endpointName);
      setIsLoading(false);
    })();
  }, [endpointName]);

  return {
    savedTypeId,
    recordIds,
    isLoading,
    isError,
  };
}
