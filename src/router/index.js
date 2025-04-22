import { createRouter, createWebHistory } from 'vue-router'
import Accueil from '../views/Accueil.vue'

const routes = [
  { path: '/', name: 'Accueil', component: Accueil },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
