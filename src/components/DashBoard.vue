<template>
    <div>
      <!-- SQL Templates Management -->
      <div>
        <template-manager ref="templateManager" :templates="sqlTemplates" :templateAction="addToPipeline"/>
      </div>
  
      <!-- Pipeline Creation -->
      <div>
        <h2>Create Pipeline</h2>
      </div>
  
      <!-- Pipeline Preview -->
      <div v-if="pipelineManagerContainer.length > 0">
        <pipeline-manager ref="pipelineManager" :pipelineTemplates="pipelineManagerContainer"/>
      </div>
  
      <!-- Filter Creation -->
      <div>
        <h2>Create Filter</h2>
        <!-- Fields and inputs for defining filters -->
        <button @click="applyFilter">Apply Filter</button>
      </div>
  
      <!-- Save Report -->
      <div>
        <h2>Save Report</h2>
        <input type="text" v-model="reportName" placeholder="Report Name">
        <button @click="saveReport">Save Report</button>
      </div>
  
      <!-- Data Viewer -->
      <div>
        <h2>Data Viewer</h2>
        <EasyDataTable v-if="tableData.length > 0" :items="tableData" :headers="headers" />
      </div>
    </div>
  </template>
  
  <script lang="ts">
  
  import { ref, defineComponent } from 'vue';
  import type { Header, Item } from 'vue3-easy-data-table';
  import TemplateManager from './TemplateManager.vue';
  import PipelineManager from './PipelineManager.vue';
  import { Template } from './types';
  
  export default defineComponent({
    components: {
      TemplateManager,
      PipelineManager,
    },
    methods: {
      addToPipeline(template: Template) {
        this.pipelineManagerContainer.push(template);
      }
    },
    
    setup() {
      const sqlTemplates = ref([
          { name: 'Template 1', query: 'SELECT * FROM table1', filters: ['status = active'], joins: ['INNER JOIN table2 ON table1.id = table2.id'] },
          { name: 'Template 2', query: 'SELECT * FROM table2', filters: ['date > 2022-01-01'], joins: [] },
          { name: 'Template 3', query: 'SELECT * FROM table3', filters: [], joins: [] }
        ]);
  
      const selectedTemplate = ref<Record<string, any>>();
      const pipelineManagerContainer = ref<Template[]>([]);
      const reportName = ref('');
      const tableData = ref<Item[]>([]);
      const headers = ref<Header[]>([]);
  
      // const addToPipeline = async () => {
      //   if (selectedTemplate.value) {
      //     pipeline.value.push({
      //       name: selectedTemplate.value.name,
      //       query: selectedTemplate.value.query,
      //       filters: selectedTemplate.value.filters,
      //       joins: selectedTemplate.value.joins
      //     });
          
      //     tableData.value = await fetchData();
      //     headers.value = Object.keys(tableData.value[0]).map((key) => ({ text: key, value: key }));
      //   }
      // }
      
      const fetchData = async (): Promise<Array<Record<string, any>>> => {
        return [
          { id: 1, name: 'John Doe', age: 30 },
          { id: 2, name: 'Jane Smith', age: 25 },
          { id: 3, name: 'Bob Johnson', age: 40 }
        ];
      }
     
      const applyFilter = async () => {
        console.log('Filter applied!');
      }
  
      const saveReport = async () => {
        console.log('Report saved!');
      }
  
      return {
        tableData,
        saveReport,
        applyFilter,
        fetchData,
        sqlTemplates,
        selectedTemplate,
        pipelineManagerContainer,
        reportName,
        headers,
      };
  
    },
  
  });
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  