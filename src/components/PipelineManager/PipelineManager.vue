<template>
  <div>
    <span>Checked names: {{ onMergeTemplates }}</span>

    <table>
      <tr>
        <td v-for="(template, index) in templates" :key="index">
            <button @click="deleteTemplate(template)">Delete</button>
            <input type="checkbox" :id="index.toString()" v-model="onMergeTemplates" :value="template"/>
            <label :for="index.toString()">To Merge</label>
            <template-pipeline-view :template="template"/>
        </td>
      </tr>
    </table>
  </div>
</template>
  
<script lang="ts">

import { ref, defineComponent } from 'vue';
import TemplatePipelineView from './components/template_view/TemplatePipelineView.vue';
import { state, mutations } from '@/stores/PipelineManager/state';
import { Template } from '@/components/types';

export default defineComponent({
  name: 'PipelineManager',
  
  components: {
    TemplatePipelineView,
  },

  methods: {
    deleteTemplate(template: Template) {
      mutations.deleteTemplate(template);
    }
  },

  setup() {
    const templates = ref(state.templates);
    const onMergeTemplates = ref([] as Template[])

    return {
      templates,
      onMergeTemplates,
    }
  }
});
</script>

<style>
/* Add your styles here */
</style>
  