<template>
    <div>
      <p>Name: {{ template.name }}</p>
      <p>Query: {{ template.query }}</p>
      <p>Filters: {{ template.filters.join(', ') }}</p>
      <p>Joins: {{ template.joins.join(', ') }}</p>
    </div>
</template>
  
<script lang="ts">
  
import { defineComponent } from 'vue';
import { Template } from '@/components/types';

export default defineComponent({
  name: 'TemplateView',

  props: {
    template: {
      type: Object as () => Template,
      required: true,
    },
  },
});
</script>

<style>
/* Add your styles here */
</style>
