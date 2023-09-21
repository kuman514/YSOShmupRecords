export interface NavNodeInfo {
  id: string;
  label: string;
  childNavNodeIds: NavNodeInfo['id'][];
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
  tweetUrl: string;
  youtubeUrl?: string;
  specialTags?: string[];
}
