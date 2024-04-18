import { Template } from '@/components/types';
import { reactive } from 'vue';

export const state = reactive({
  templates: [] as Template[],
  
})

export const mutations = {  
  addTemplate: (template: Template) => {
    state.templates.push(template);
  },

  deleteTemplate: (template: Template) => {
    state.templates.splice(state.templates.indexOf(template), 1);
  },
}

export const getters = {
  getTemplates: () => {
    return state.templates;
  }
}
