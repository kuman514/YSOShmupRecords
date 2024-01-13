import axios from 'axios';
import { useEffect, useState } from 'react';

import { getAPIURL } from '^/utils/api-url';
import { ShmupRecordPreview } from '^/types';
import { convertDateToString } from '^/utils/date-to-string';

export function useShmupRecordPreviewList(endpointName: string) {
  const [recordPreviews, setRecordPreviews] = useState<ShmupRecordPreview[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);
      setRecordPreviews([]);

      try {
        const response = await axios.get<string[]>(
          getAPIURL('records', endpointName, 'selection')
        );
        const newRecordPreviews = response.data.map(
          (recordId): ShmupRecordPreview => ({
            id: recordId,
            title: `${convertDateToString(new Date(recordId))} 기록`,
            imageUrl: getAPIURL(
              'records',
              endpointName,
              'images',
              `${recordId}_thumbnail.jpg`
            ),
          })
        );
        setRecordPreviews(newRecordPreviews);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          setRecordPreviews([]);
          setIsError(true);
        }
      }

      setIsLoading(false);
    })();
  }, [endpointName]);

  return {
    recordPreviews,
    isLoading,
    isError,
  };
}
