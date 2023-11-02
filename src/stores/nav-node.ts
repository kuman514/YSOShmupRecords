import { create } from 'zustand';

import { NavNodeInfo } from '^/types';
import { rootNavNodes } from '^/constants';

interface NavNodeState {
  rootNodes: NavNodeInfo[];
  isOpen: Record<NavNodeInfo['id'], boolean>;
}

interface NavNodeAction {
  setRootNodes(newRootNodes: NavNodeInfo[]): void;
  setIsOpen(id: NavNodeInfo['id'], newIsOpen: boolean): void;
}

type NavNodeStore = NavNodeState & NavNodeAction;

export const useNavNodeStore = create<NavNodeStore>((set) => ({
  rootNodes: rootNavNodes,
  isOpen: {},
  setRootNodes: (newRootNodes) =>
    set((store) => ({
      ...store,
      rootNodes: newRootNodes,
    })),
  setIsOpen: (id, newIsOpen) =>
    set((store) => ({
      ...store,
      isOpen: {
        ...store.isOpen,
        [id]: newIsOpen,
      },
    })),
}));
