import { useEffect, useState } from 'react';

import { getShmupRecordArticle } from '^/apis/get-shmup-record-article';
import { ShmupRecord } from '^/types';

export function useShmupArticle(typeId: string, recordDateId: string) {
  const [recordArticle, setRecordArticle] = useState<ShmupRecord>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getShmupRecordArticle({
      typeId,
      recordDateId,
      onStart: () => {
        setIsLoading(true);
        setIsError(false);
      },
      onError: () => {
        setIsError(true);
        setIsLoading(false);
      },
      onComplete: (newShmupRecordArticle) => {
        setRecordArticle(newShmupRecordArticle);
        setIsLoading(false);
      },
    });
  }, [typeId, recordDateId]);

  return {
    recordArticle,
    isLoading,
    isError,
  };
}
