<template>
    <div ref="container" class="event-graph"></div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref, PropType } from 'vue';
  import * as d3 from 'd3';
  import { Node, Edge, Layout } from 'graphmaptime';
  import { applyLayout } from '../d3/layout';
  import { initGraph } from '../d3/graph';
  import  { Hooks } from '../utils/hooks';
  
  export default defineComponent({
    name: 'EventGraph',
    props: {
      nodes: {
        type: Array as PropType<Node[]>,
        required: true
      },
      edges: {
        type: Array as PropType<Edge[]>,
        required: true
      },
      layout: {
        type: Object as PropType<Layout>,
        default: () => ({ type: 'forceDirected' })
      },
      hooks: {
        type: Object as PropType<Hooks>,
        default: () => ({})
      }
    },
    setup(props) {
      const container = ref<HTMLDivElement | null>(null);
  
      onMounted(() => {
        if (container.value) {
          const svg = d3.select(container.value).append('svg');
          initGraph(svg, props.nodes, props.edges);
          applyLayout(svg, props.nodes, props.edges, props.layout);
  
          // Execute hook functions
          if (props.hooks.onGraphInitialized) {
            props.hooks.onGraphInitialized();
          }
        }
      });
  
      return { container };
    }
  });
  </script>
  
  <style scoped>
  .event-graph {
    width: 100%;
    height: 100%;
  }
  </style>
  