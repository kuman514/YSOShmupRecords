import { useEffect, useState } from 'react';

import { ShmupRecord } from '^/types';
import { getShmupRecordArticle } from '^/utils/api';

export function useShmupArticle(typeId: string, recordDateId: string) {
  const [recordArticle, setRecordArticle] = useState<ShmupRecord>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    getShmupRecordArticle(
      typeId,
      recordDateId,
      setIsLoading,
      setIsError,
      setRecordArticle
    );
  }, [typeId, recordDateId]);

  return {
    recordArticle,
    isLoading,
    isError,
  };
}
