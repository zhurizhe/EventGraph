// utils/hooks.ts

// 钩子类型定义
export interface Hooks {
  onGraphInitialized?: () => void;  // 图谱初始化后的钩子
  onNodeClick?: (nodeId: string) => void; // 节点点击后的钩子
  onEdgeClick?: (edgeId: string) => void; // 边点击后的钩子
  // 其他钩子可以根据需要添加
}

// 默认钩子实现
export const defaultHooks: Hooks = {
  onGraphInitialized: () => { },
  onNodeClick: () => { },
  onEdgeClick: () => { },
};

// 自定义钩子实现函数
export function useGraphHooks(hooks: Hooks = defaultHooks) {
  return {
    initializeGraph: () => {
      // 初始化图谱的逻辑
      hooks.onGraphInitialized && hooks.onGraphInitialized();
    },
    handleNodeClick: (nodeId: string) => {
      // 节点点击处理逻辑
      hooks.onNodeClick && hooks.onNodeClick(nodeId);
    },
    handleEdgeClick: (edgeId: string) => {
      // 边点击处理逻辑
      hooks.onEdgeClick && hooks.onEdgeClick(edgeId);
    },
  };
}
