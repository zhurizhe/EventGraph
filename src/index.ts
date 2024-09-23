// src/index.ts

// 导入组件
import KnowledgeGraph from './components/EventGraph.vue';

// 导入类型
import { Hooks } from './utils/hooks';
import { Node, Edge, Layout } from 'graphmaptime';

// 导出组件和类型
export {
  KnowledgeGraph,
  Node,
  Edge,
  Layout,
  Hooks,
};

// 如果需要，还可以导出默认组件
export default KnowledgeGraph;
