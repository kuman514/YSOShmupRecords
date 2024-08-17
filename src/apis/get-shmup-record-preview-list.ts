import axios from 'axios';

import { GetShmupRecordPreviewListResponse, ShmupRecordPreview } from '^/types';
import { convertDateToString } from '^/utils/date-to-string';
import { getAPIURL } from '^/utils/get-api-url';

import { apiClient } from './api';

interface Params {
  typeId?: string;
  onStart: () => void;
  onError: (error: Error) => void;
  onComplete: (newShmupRecordPreviews: ShmupRecordPreview[]) => void;
}

export async function getShmupRecordPreviewList({
  typeId,
  onStart,
  onError,
  onComplete,
}: Params) {
  onStart();

  try {
    const response = await apiClient.get<GetShmupRecordPreviewListResponse>(
      typeId ? getAPIURL('records', typeId) : getAPIURL('records')
    );
    const newRecordPreviews = response.data.data
      .map((record): ShmupRecordPreview => {
        const dateFromString = new Date(record.when);
        return {
          ...record,
          when: dateFromString,
          title: `${convertDateToString(dateFromString)} 기록`,
        };
      })
      .sort((a, b) => {
        const bTime = b.when.getTime();
        const aTime = a.when.getTime();

        if (aTime !== bTime) {
          return bTime - aTime;
        }

        return a.typeId.localeCompare(b.typeId);
      });
    onComplete(newRecordPreviews);
  } catch (error) {
    /**
     * 에러 출력이 필요하므로 no-console을 이 줄에 한해 해제함
     */
    // eslint-disable-next-line no-console
    console.error(error);
    if (axios.isAxiosError(error)) {
      onError(error);
    } else {
      onError(new Error('Something else went wrong.'));
    }
  }
}
