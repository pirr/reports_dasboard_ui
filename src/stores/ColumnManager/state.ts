import { Column, ColumnOperations, Operation } from '@/components/types';
import { reactive } from 'vue';

export const state = reactive({
  columns: [] as Column[],
  columnsOperations: [] as ColumnOperations[],
})

export const mutations = {  
  addColumn: (column: Column) => {
    state.columns.push(column);
  },

  deleteColumn: (column: Column) => {
    state.columns.splice(state.columns.indexOf(column), 1);
  },

  addColumnOperation: <Type>(column: Column, operations: Operation[]) => {
    state.columnsOperations.push({column, operations}); 
  }

}

export const getters = {
  getColumns: () => {
    return state.columns;
  }
}
