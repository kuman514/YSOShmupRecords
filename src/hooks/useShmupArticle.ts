import { useEffect, useState } from 'react';

import { getShmupRecordArticle } from '^/apis/get-shmup-record-article';
import { ShmupRecord } from '^/types';

export function useShmupArticle(typeId: string, recordDateId: string) {
  const [recordArticle, setRecordArticle] = useState<ShmupRecord>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setIsError(false);

      const result = await getShmupRecordArticle({
        typeId,
        recordDateId,
      });

      switch (result.status) {
        case 'successful':
          setRecordArticle(result.data);
          break;
        case 'failed':
          setIsError(true);
          break;
        default:
          break;
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
