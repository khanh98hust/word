import home from '../components/home.vue';
import list from '../components/list.vue';

export const routes = [
  {
    path : '/',
    name : 'homepage',
    component : home
  },
  {
    path : '/list',
    name : 'list',
    component : list
  }
]