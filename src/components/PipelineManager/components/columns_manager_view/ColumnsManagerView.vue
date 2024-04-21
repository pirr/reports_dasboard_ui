<template>
    <div>
        <template-view :template="template"/>
        <table>
            <tr v-for="(column, index) in template.columns" :key="index">
                <column-view :column="column"/>
                <td>{{ column }}</td>
                <td><input type="text" :defaultValue="column"/></td>
                <td><button @click="addColumnToPipeline">Add Column to Pipeline</button></td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import TemplateView from './components/template_view/TemplateView.vue';
import { state, mutations } from '@/stores/PipelineManager/state';
import { Template } from '@/components/types';
import { Column } from '@/components/types';

export default defineComponent({
  name: 'ColumnsOperationsView',

  components: {
    TemplateView,
  },

  props: {
    template: {
      type: Object as () => Template,
      required: true,
    },
  },
});
</script>
