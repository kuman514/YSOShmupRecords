export interface NavNodeInfo {
  id: string;
  label: string;
  childNavNodeIds: NavNodeInfo['id'][];
}
