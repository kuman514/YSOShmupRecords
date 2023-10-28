import axios from 'axios';
import { useEffect, useState } from 'react';

import { useShmupRecordStore } from '^/stores/shmup-record';
import { getAPIURL } from '^/utils/api-url';

export function useShmupRecordIds(pathName: string) {
  const recordIds = useShmupRecordStore((state) => state.recordIds);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const pathNameSplit = pathName.split('/').filter((path) => path.length > 1);

  useEffect(() => {
    (async () => {
      useShmupRecordStore.getState().setRecordIds([]);
      setIsError(false);
      setIsLoading(true);
      try {
        const response = await axios.get<string[]>(
          getAPIURL(...pathNameSplit, 'selection')
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
  }, [pathName]);

  return {
    recordIds,
    isLoading,
    isError,
  };
}
