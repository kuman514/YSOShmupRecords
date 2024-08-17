import axios from 'axios';

import { GetShmupRecordArticleResponse, ShmupRecord } from '^/types';
import { getAPIURL } from '^/utils/get-api-url';

import { apiClient } from './api';

interface Params {
  typeId: string;
  recordDateId: string;
  onStart: () => void;
  onError: (error: Error) => void;
  onComplete: (newShmupRecordArticle: ShmupRecord) => void;
}

export async function getShmupRecordArticle({
  typeId,
  recordDateId,
  onStart,
  onError,
  onComplete,
}: Params) {
  onStart();

  try {
    const response = await apiClient.get<GetShmupRecordArticleResponse>(
      getAPIURL('records', typeId, recordDateId)
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
    if (axios.isAxiosError(error)) {
      onError(error);
    } else {
      onError(new Error('Something else went wrong.'));
    }
  }
}
