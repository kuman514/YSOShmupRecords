import { useEffect, useState } from 'react';

import { ShmupRecord } from '^/types';
import { apiClient, getAPIURL } from '^/utils/api';

interface GetShmupRecordArticleResponse {
  attempts: number;
  statusCode: number;
  data: ShmupRecord;
}

export function useShmupArticle(typeId: string, recordDateId: string) {
  const [recordArticle, setRecordArticle] = useState<ShmupRecord>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!recordDateId) {
      setRecordArticle(undefined);
      return;
    }

    (async () => {
      setIsError(false);
      setIsLoading(true);
      setRecordArticle(undefined);
      try {
        const response = await apiClient.get<GetShmupRecordArticleResponse>(
          getAPIURL('records', typeId, recordDateId)
        );
        setRecordArticle({
          ...response.data.data,
          when: new Date(response.data.data.when),
        });
      } catch (error) {
        setRecordArticle(undefined);
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [typeId, recordDateId]);

  return {
    recordArticle,
    isLoading,
    isError,
  };
}
