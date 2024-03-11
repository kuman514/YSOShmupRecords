import { useEffect, useState } from 'react';

import { ShmupRecord, ShmupRecordPreview } from '^/types';
import { apiClient, getAPIURL } from '^/utils/api';
import { convertDateToString } from '^/utils/date-to-string';
import { getStaticImageUrl } from '^/utils/static-image-url';

interface GetShmupRecordPreviewListResponse {
  attempts: number;
  statusCode: number;
  data: ShmupRecord[];
}

export function useShmupRecordPreviewList(typeId: string) {
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
        const response = await apiClient.get<GetShmupRecordPreviewListResponse>(
          getAPIURL('records', typeId)
        );
        const newRecordPreviews = response.data.data
          .sort((a, b) => b.recordId.localeCompare(a.recordId))
          .map(
            (record): ShmupRecordPreview => ({
              ...record,
              thumbnailUrl: getStaticImageUrl(record.thumbnailUrl),
              originalImageUrls: record.originalImageUrls.map(
                (originalImageUrl) => getStaticImageUrl(originalImageUrl)
              ),
              when: new Date(record.when),
              title: `${convertDateToString(
                new Date(record.recordId.split('--')[1])
              )} 기록`,
            })
          );
        setRecordPreviews(newRecordPreviews);
      } catch (error) {
        setRecordPreviews([]);
        setIsError(true);
      }

      setIsLoading(false);
    })();
  }, [typeId]);

  return {
    recordPreviews,
    isLoading,
    isError,
  };
}
