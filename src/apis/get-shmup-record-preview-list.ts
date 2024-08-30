import axios from 'axios';

import {
  GetResponse,
  GetResult,
  ShmupRecord,
  ShmupRecordPreview,
} from '^/types';
import { convertDateToString } from '^/utils/date-to-string';
import { getAPIURL } from '^/utils/get-api-url';

import { apiClient } from './api';

export async function getShmupRecordList(
  typeId?: string
): Promise<GetResult<ShmupRecordPreview[]>> {
  try {
    const response = await apiClient.get<GetResponse<ShmupRecord[]>>(
      getAPIURL('records', typeId ?? '')
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

    return {
      status: 'successful',
      data: newRecordPreviews,
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
