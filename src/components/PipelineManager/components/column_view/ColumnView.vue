<template>
    <div>
        <table>
            <tr>
                <td>{{ column.name }}</td>
                <td>{{ column.type }}</td>
                <td>{{ column.alias }}</td>
            </tr>
        </table>
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import { Column } from '@/components/types';

export default defineComponent({
  name: 'ColumnView',

  props: {
    column: {
      type: Object as () => Column,
      required: true,
    },
  },
});

</script>