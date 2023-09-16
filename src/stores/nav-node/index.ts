import { create } from 'zustand';

import { NavNodeInfo } from '^/types';

interface NavNodeState {
  rootNodeIds: NavNodeInfo['id'][];
  navNodeInfoById: Record<string, NavNodeInfo>;
  isOpen: Record<NavNodeInfo['id'], boolean>;
}

interface NavNodeAction {
  setRootNodeIds(newRootNodeIds: NavNodeInfo['id'][]): void;
  setNavNodeInfoById(newNavNodeInfoById: Record<string, NavNodeInfo>): void;
  setIsOpen(id: NavNodeInfo['id'], newIsOpen: boolean): void;
}

type NavNodeStore = NavNodeState & NavNodeAction;

export const useNavNodeStore = create<NavNodeStore>((set) => ({
  rootNodeIds: [],
  navNodeInfoById: {},
  isOpen: {},
  setIsOpen: (id, newIsOpen) =>
    set((store) => ({
      ...store,
      isOpen: {
        ...store.isOpen,
        [id]: newIsOpen,
      },
    })),
  setRootNodeIds: (newRootNodeIds) =>
    set((store) => ({
      ...store,
      rootNodeIds: newRootNodeIds,
    })),
  setNavNodeInfoById: (newNavNodeInfoById) =>
    set((store) => ({
      ...store,
      navNodeInfoById: newNavNodeInfoById,
    })),
}));
