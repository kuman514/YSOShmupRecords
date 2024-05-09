import { GetShmupRecordArticleResponse, ShmupRecord } from '^/types';
import { getAPIURL } from '^/utils/get-api-url';

import { apiClient } from './api';

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
