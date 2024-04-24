<template>
    <div>
        <template-view :columns="columns"/>
        <table>
            <tr v-for="(column, index) in columns" :key="index">
                <input type="checkbox" :id="index.toString()" v-model="template.columns" :value="column"/>
                <column-view :column="column"/>
                <td>{{ column }}</td>
                <td><input type="text" :defaultValue="column"/></td>
                <td><button @click="addColumnToPipeline(column)">Add Column to Pipeline</button></td>
            </tr>
        </table>
    </div>
</template>

<script lang="ts">

import { ref, defineComponent } from 'vue';
import TemplateView from './components/template_view/TemplateView.vue';
import { mutations } from '@/stores/ColumnManager/state';
import { Column } from '@/components/types';

export default defineComponent({
  name: 'ColumnsOperationsView',

  components: {
    TemplateView,
  },

  props: {
    columns: {
      type: Object as () => Column[],
      required: true,
    },
  },

  methods: {
    addColumnToPipeline(column: Column) {
      mutations.addColumn(column);
    },
  },

});
</script>
