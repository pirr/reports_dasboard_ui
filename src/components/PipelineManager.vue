<template>
    <div>
      <!-- Pipeline Preview -->
      <div v-if="pipelineTemplates.length > 0">
        <h2>Pipeline Preview</h2>
        <div v-for="(step, index) in pipelineTemplates" :key="index">
          <button @click="piplineElementAction(step)">{{ piplineElementActionButtonName }}</button>
          <p>Name: {{ step.name }}</p>
          <p>Query: {{ step.query }}</p>
          <p>Filters: {{ step.filters.join(', ') }}</p>
          <p>Joins: {{ step.joins.join(', ') }}</p>
          <!-- Additional fields and actions for managing pipeline -->
        </div>
      </div>
  
    </div>
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import { Template } from './types';
  
  export default defineComponent({
    props: {
      pipelineTemplates: {
        type: Array as () => Template[],
        default: () => [],
      },
      piplineElementAction: {
        type: Function,
        default: () => {},
      },
      piplineElementActionButtonName: {
        type: String,
        default: 'Delete',
      }
    },  
  
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  