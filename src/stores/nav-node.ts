import { create } from 'zustand';

import { NavNodeInfo } from '^/types';

interface NavNodeState {
  isOpen: Record<NavNodeInfo['id'], boolean>;
}

interface NavNodeAction {
  setIsOpen(id: NavNodeInfo['id'], newIsOpen: boolean): void;
}

type NavNodeStore = NavNodeState & NavNodeAction;

export const useNavNodeStore = create<NavNodeStore>((set) => ({
  isOpen: {},
  setIsOpen: (id, newIsOpen) =>
    set((store) => ({
      ...store,
      isOpen: {
        ...store.isOpen,
        [id]: newIsOpen,
      },
    })),
}));
