export interface NavNodeInfo {
  id: string;
  linkTo?: string;
  childNavNodes?: NavNodeInfo[];
}

export interface ShmupRecordPreview {
  id: string;
  title: string;
  imageUrl: string;
}

export interface ShmupRecord {
  id: string;
  when: Date;
  subjectId: string;
  stage: string;
  /**
   * Why score should be string?
   * In case of exceeding `Number.MAX_SAFE_INTEGER`, which equals to `9007199254740991`.
   */
  score: string;
  byWhat: string;
  comment: string;
  thumbnailUrl: string;
  originalImageUrl: string;
  youtubeUrl?: string;
  specialTags?: string[];
}

export interface DescriptionListItem {
  id: string;
  description: string;
}

export enum ButtonType {
  SOLID = 'solid',
  LINE = 'line',
  ROUND_SOLID = 'round-solid',
  ROUND_LINE = 'round-line',
  CLEAR = 'clear',
}
