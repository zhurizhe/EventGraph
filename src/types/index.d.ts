import { Node, Edge, Layout } from 'graphmaptime';

export interface Hooks {
  onGraphInitialized?: () => void;
}