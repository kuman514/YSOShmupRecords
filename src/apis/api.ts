import axios from 'axios';

import {
  GetShmupRecordArticleResponse,
  GetShmupRecordPreviewListResponse,
  ShmupRecord,
  ShmupRecordPreview,
} from '^/types';
import { convertDateToString } from '^/utils/date-to-string';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export function getAPIURL(...paths: string[]) {
  return paths.join('/');
}

export async function getShmupRecordArticle(
  typeId: string,
  recordId: string,
  onLoad: (newIsLoading: boolean) => void,
  onError: (newIsError: boolean) => void,
  onComplete: (newShmupRecordArticle: ShmupRecord) => void
) {
  onLoad(true);
  onError(false);

  try {
    const response = await apiClient.get<GetShmupRecordArticleResponse>(
      getAPIURL('records', typeId, recordId)
    );
    onComplete({
      ...response.data.data,
      when: new Date(response.data.data.when),
    });
  } catch (error) {
    /**
     * 에러 출력이 필요하므로 no-console을 이 줄에 한해 해제함
     */
    // eslint-disable-next-line no-console
    console.error(error);
    onError(true);
  }

  onLoad(false);
}

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
