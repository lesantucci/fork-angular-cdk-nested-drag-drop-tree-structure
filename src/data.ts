export interface TreeNode {
  id: string;
  children: TreeNode[];
  isExpanded?: boolean;
}

export interface DropInfo {
  targetId: string;
  action?: string;
}

export var demoData: TreeNode[] = [
  {
    id: 'Produto 1',
    children: [],
  },
  {
    id: 'Produto 2',
    children: [
      {
        id: 'Produto 3',
        children: [],
      },
      {
        id: 'Produto 4',
        children: [],
      },
      {
        id: 'Produto 5',
        children: [],
      },
    ],
  },
  {
    id: 'Produto 6',
    children: [],
  },
];
