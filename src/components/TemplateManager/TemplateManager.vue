<template>
  <div>
    <div v-for="(template, index) in templates" :key="index">
      <table>
        <tr>
          <td><button @click="addTemplateToPipline(template)">Add to Pipeline</button></td>
          <td><template-view :template="template"/></td>
        </tr>
      </table>
    </div>
  </div>
</template>
  
<script lang="ts">

import { ref, defineComponent, onMounted } from 'vue';
import TemplateView from './components/template_view/TemplateView.vue';
import { mutations, state } from '@/stores/TemplateManager/state';
import { mutations as pipelineMutations } from '@/stores/PipelineManager/state';
import { Template } from '@/components/types';

export default defineComponent({
  name: 'TemplateManager',

  components: {
    TemplateView,
  },

  methods: {
    addTemplateToPipline(template: Template) {
      pipelineMutations.addTemplate(template);
    }
  },

  setup() {
    const templates = ref(state.templates);

    const sqlTemplates = [
      { name: 'Template 1', query: 'SELECT * FROM table1', filters: ['status = active'], joins: ['INNER JOIN table2 ON table1.id = table2.id'] },
      { name: 'Template 2', query: 'SELECT * FROM table2', filters: ['date > 2022-01-01'], joins: [] },
      { name: 'Template 3', query: 'SELECT * FROM table3', filters: [], joins: [] }
    ];

    onMounted(() => {
      for (const template of sqlTemplates) {
        mutations.addTemplate(template);
      }
    });

    return {
      templates,
    }

  }
});
</script>

<style>
/* Add your styles here */
</style>
  