<template>
    <div>
      <div>
        <h2>SQL Templates Management</h2>
        <div v-for="(template, index) in templates" :key="index">
          <button @click="templateAction(template)">Add to Pipeline</button>
          <p>Name: {{ template.name }}</p>
          <p>Query: {{ template.query }}</p>
          <p>Filters: {{ template.filters.join(', ') }}</p>
          <p>Joins: {{ template.joins.join(', ') }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  import { defineComponent } from 'vue';
  import { Template } from './types';
  
  export default defineComponent({
    name: 'TemplateManager',
    props: {
      templates: {
        type: Array as () => Template[],
        default: () => [],
      },
      templateAction: {
        type: Function,
        default: () => {},
      },
    },
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  