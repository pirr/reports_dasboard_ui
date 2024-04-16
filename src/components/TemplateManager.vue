<template>
    <div>
      <div>
        <h2>SQL Templates Management</h2>
        <div v-for="(template, index) in sqlTemplates" :key="index">
          <p>Name: {{ template.name }}</p>
          <p>Query: {{ template.query }}</p>
          <p>Filters: {{ template.filters.join(', ') }}</p>
          <p>Joins: {{ template.joins.join(', ') }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  import { ref, defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'TemplateManager',
  
    setup() {
      const sqlTemplates = ref([
        { name: 'Template 1', query: 'SELECT * FROM table1', filters: ['status = active'], joins: ['INNER JOIN table2 ON table1.id = table2.id'] },
        { name: 'Template 2', query: 'SELECT * FROM table2', filters: ['date > 2022-01-01'], joins: [] },
        { name: 'Template 3', query: 'SELECT * FROM table3', filters: [], joins: [] }
      ]);
  
      return {
        sqlTemplates,
      };
  
    },
  
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  