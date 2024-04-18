<template>
  <div>
    <!-- SQL Templates Management -->
    <div>
      <template-manager ref="templateManager"/>
    </div>

    <!-- Pipeline Creation -->
    <div>
      <h2>Create Pipeline</h2>
    </div>

    <!-- Pipeline Preview -->
    <div>
      <pipeline-manager ref="pipelineManager"/>
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
import TemplateManager from './TemplateManager/TemplateManager.vue';
import PipelineManager from './PipelineManager/PipelineManager.vue';

export default defineComponent({
  components: {
    TemplateManager,
    PipelineManager,
  },
  methods: {
    
  },
  
  setup() {
    
    const tableData = ref<Item[]>([]);
    const headers = ref<Header[]>([]); 
    const reportName = ref(''); 

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
      headers,
      reportName,
    };

  },

});
</script>
  
  <style>
  /* Add your styles here */
  </style>
  