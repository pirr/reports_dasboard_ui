<template>
    <div>
        <table>
            <tr>
                <td>{{ column }}</td>
                <td><input type="text" :defaultValue="column"/></td>
            </tr>
        </table>
    </div>
</template>


<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColumnView',

  props: {
    column: {
      type: String,
      required: true,
    },
  },
});

</script>