import { create } from 'zustand';

import { ShmupRecord } from '^/types';

interface ShmupRecordState {
  recordIds: ShmupRecord['id'][];
  currentRecordId: ShmupRecord['id'] | null;
  recordArticle: ShmupRecord | null;
}

interface ShmupRecordAction {
  setRecordIds(newRecordIds: ShmupRecord['id'][]): void;
  setCurrentRecordId(newCurrentRecordId: ShmupRecord['id'] | null): void;
  setRecordArticle(newRecordArticle: ShmupRecord | null): void;
}

type ShmupRecordStore = ShmupRecordState & ShmupRecordAction;

export const useShmupRecordStore = create<ShmupRecordStore>((set) => ({
  recordIds: [],
  currentRecordId: null,
  recordArticle: null,
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
