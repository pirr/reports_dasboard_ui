import { Column } from '@/components/types';
import { reactive } from 'vue';

export const state = reactive({
  columns: [] as Column[],
  
})

export const mutations = {  
  addColumn: (column: Column) => {
    state.columns.push(column);
  },

  deleteColumn: (column: Column) => {
    state.columns.splice(state.columns.indexOf(column), 1);
  },

  divOn: <Type>(column: Column, other: Type) => {
    return column === other
  }

}

export const getters = {
  getColumns: () => {
    return state.columns;
  }
}