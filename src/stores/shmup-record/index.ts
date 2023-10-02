import { create } from 'zustand';

import { ShmupRecord } from '^/types';

interface ShmupRecordState {
  record?: ShmupRecord;
}

interface ShmupRecordAction {
  setShmupRecord(newRecord?: ShmupRecord): void;
}

type ShmupRecordStore = ShmupRecordState & ShmupRecordAction;

export const useShmupRecordStore = create<ShmupRecordStore>((set) => ({
  setShmupRecord: (newRecord) =>
    set((store) => ({
      ...store,
      record: newRecord,
    })),
}));
