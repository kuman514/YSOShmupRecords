export interface NavNodeInfo {
  id: string;
  linkTo?: string;
  childNavNodes?: NavNodeInfo[];
}

export interface ShmupRecord {
  recordId: string;
  when: Date;
  typeId: string;
  stage: string;
  /**
   * Why score should be string?
   * In case of exceeding `Number.MAX_SAFE_INTEGER`, which equals to `9007199254740991`.
   */
  score: string;
  byWhat: string;
  comment: string;
  thumbnailUrl: string;
  originalImageUrls: string[];
  youtubeUrl?: string;
  specialTags?: string[];
}

export interface ShmupRecordPreview extends ShmupRecord {
  title: string;
}

export interface DescriptionListItem {
  id: string;
  description: string;
}

export interface Terminology extends DescriptionListItem {
  term: string;
}

export enum ButtonType {
  SOLID = 'solid',
  LINE = 'line',
  ROUND_SOLID = 'round-solid',
  ROUND_LINE = 'round-line',
  CLEAR = 'clear',
}

export interface GetShmupRecordPreviewListResponse {
  attempts: number;
  statusCode: number;
  data: ShmupRecord[];
}

export interface GetShmupRecordArticleResponse {
  attempts: number;
  statusCode: number;
  data: ShmupRecord;
}

export interface GetResponse<T> {
  attempts: number;
  statusCode: number;
  data: T;
}

export interface SuccessfulGetResult<T> {
  status: 'successful';
  data: T;
}

export interface FailedGetResult {
  status: 'failed';
  errorMessage: Error;
}

export type GetResult<T> = SuccessfulGetResult<T> | FailedGetResult;
