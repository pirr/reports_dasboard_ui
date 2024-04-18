<template>
  <div>
    <div v-for="(template, index) in templates" :key="index">
      <table>
        <tr>
          <td><button @click="deleteTemplate(template)">Delete</button></td>
          <td><template-view :template="template"/></td>
        </tr>
      </table>
    </div>
  </div>
</template>
  
<script lang="ts">

import { ref, defineComponent } from 'vue';
import TemplateView from './components/template_view/TemplateView.vue';
import { state, mutations } from '@/stores/PipelineManager/state';
import { Template } from '@/components/types';

export default defineComponent({
  name: 'PipelineManager',
  
  components: {
    TemplateView,
  },

  methods: {
    deleteTemplate(template: Template) {
      mutations.deleteTemplate(template);
    }
  },

  setup() {
    const templates = ref(state.templates);

    return {
      templates,
    }
  }
});
</script>

<style>
/* Add your styles here */
</style>
  