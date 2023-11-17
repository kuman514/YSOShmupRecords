import axios from 'axios';
import { useEffect, useState } from 'react';

import { useShmupRecordStore } from '^/stores/shmup-record';
import { getAPIURL } from '^/utils/api-url';

export function useShmupRecordIds(endpointName: string) {
  const recordIds = useShmupRecordStore((state) => state.recordIds);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      useShmupRecordStore.getState().setRecordIds([]);
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get<string[]>(
          getAPIURL('records', endpointName, 'selection')
        );
        useShmupRecordStore.getState().setRecordIds(response.data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          useShmupRecordStore.getState().setRecordIds([]);
          setIsError(true);
        }
      }
      setIsLoading(false);
    })();
  }, [endpointName]);

  return {
    recordIds,
    isLoading,
    isError,
  };
}
