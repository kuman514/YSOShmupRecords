import axios from 'axios';

import { GetResult, ShmupRecord } from '^/types';
import { getAPIURL } from '^/utils/get-api-url';

import { apiClient } from './api';

interface Params {
  typeId: string;
  recordDateId: string;
}

export async function getShmupRecordArticle({
  typeId,
  recordDateId,
}: Params): Promise<GetResult<ShmupRecord>> {
  try {
    const response = await apiClient.get<ShmupRecord>(
      getAPIURL('records', typeId, recordDateId)
    );

    return {
      status: 'successful',
      data: {
        ...response.data,
        when: new Date(response.data.when),
      },
    };
  } catch (error) {
    /**
     * 에러 출력이 필요하므로 no-console을 이 줄에 한해 해제함
     */
    // eslint-disable-next-line no-console
    console.error(error);

    return {
      status: 'failed',
      errorMessage: axios.isAxiosError(error)
        ? error
        : new Error('Something else went wrong.'),
    };
  }
}
