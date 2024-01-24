import axios from 'axios';
import { useState, useEffect } from 'react';

import { ShmupRecord } from '^/types';
import { getAPIURL } from '^/utils/api-url';
import { getStaticImageUrl } from '^/utils/static-image-url';

interface GetShmupRecordArticleResponse {
  attempts: number;
  statusCode: number;
  data: ShmupRecord;
}

export function useShmupArticle(
  endpointName: string,
  currentRecordId?: string
) {
  const [recordArticle, setRecordArticle] = useState<ShmupRecord>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (!currentRecordId) {
      setRecordArticle(undefined);
      return;
    }

    (async () => {
      setIsError(false);
      setIsLoading(true);
      setRecordArticle(undefined);
      try {
        const response = await axios.get<GetShmupRecordArticleResponse>(
          getAPIURL('records', endpointName, currentRecordId)
        );
        setRecordArticle({
          ...response.data.data,
          thumbnailUrl: getStaticImageUrl(response.data.data.thumbnailUrl),
          originalImageUrls: response.data.data.originalImageUrls.map(
            (originalImageUrl) => getStaticImageUrl(originalImageUrl)
          ),
          when: new Date(response.data.data.when),
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
