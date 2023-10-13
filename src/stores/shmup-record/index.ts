import { create } from 'zustand';

import { ShmupRecord } from '^/types';

interface ShmupRecordState {
  recordIds: ShmupRecord['id'][];
  currentRecordId?: ShmupRecord['id'];
  recordArticle?: ShmupRecord;
}

interface ShmupRecordAction {
  setRecordIds(newRecordIds: ShmupRecord['id'][]): void;
  setCurrentRecordId(newCurrentRecordId: ShmupRecord['id']): void;
  setRecordArticle(newRecordArticle: ShmupRecord): void;
}

type ShmupRecordStore = ShmupRecordState & ShmupRecordAction;

export const useShmupRecordStore = create<ShmupRecordStore>((set) => ({
  recordIds: [],
  setRecordIds: (newRecordIds) =>
    set((store) => ({
      ...store,
      recordIds: newRecordIds,
    })),
  setCurrentRecordId: (newCurrentRecordId) =>
    set((store) => ({
      ...store,
      currentRecordId: newCurrentRecordId,
    })),
  setRecordArticle: (newRecordArticle) =>
    set((store) => ({
      ...store,
      recordArticle: newRecordArticle,
    })),
}));
