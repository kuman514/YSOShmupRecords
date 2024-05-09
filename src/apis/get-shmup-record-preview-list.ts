import { GetShmupRecordPreviewListResponse, ShmupRecordPreview } from '^/types';
import { convertDateToString } from '^/utils/date-to-string';
import { getAPIURL } from '^/utils/get-api-url';

import { apiClient } from './api';

export async function getShmupRecordPreviewList(
  typeId: string,
  onLoad: (newIsLoading: boolean) => void,
  onError: (newIsError: boolean) => void,
  onComplete: (newShmupRecordPreviews: ShmupRecordPreview[]) => void
) {
  onLoad(true);
  onError(false);

  try {
    const response = await apiClient.get<GetShmupRecordPreviewListResponse>(
      getAPIURL('records', typeId)
    );
    const newRecordPreviews = response.data.data
      .sort((a, b) => b.recordId.localeCompare(a.recordId))
      .map((record): ShmupRecordPreview => {
        const dateFromString = new Date(record.when);
        return {
          ...record,
          when: dateFromString,
          title: `${convertDateToString(dateFromString)} 기록`,
        };
      });
    onComplete(newRecordPreviews);
  } catch (error) {
    /**
     * 에러 출력이 필요하므로 no-console을 이 줄에 한해 해제함
     */
    // eslint-disable-next-line no-console
    console.error(error);
    onError(false);
  }

  onLoad(false);
}
