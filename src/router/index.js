import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import Playground from '../views/Playground.vue'
import VSAE from '../views/Vue_Template_Syntax_and_Expressions.vue'
import ListRendering from '../views/List_Rendering.vue'
import UserInput from '../views/Userinput.vue'
import UserEvents from '../views/User_Events.vue'
import Methods from '../views/Methods.vue'
import Conditionals from '../views/Conditionals.vue'
import Attributbinding from '../views/Attribut_binding.vue'
import dynamiquecssclasses from '../views/dynamiquecssclasses.vue'
import ComputedProperties from '../views/Computed_Properties.vue'
import Reactivity from '../views/Reactivity.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/Playground',
      name: 'Playground',
      component: Playground
    },
    {
      path: '/VSAE',
      name: 'VSAE',
      component: VSAE
    },
    {
      path: '/ListRendering',
      name: 'ListRendering',
      component: ListRendering
    },
    {
      path: '/UserInput',
      name: 'UserInput',
      component: UserInput
    },
    {
      path: '/UserEvents',
      name: 'UserEvents',
      component: UserEvents
    },
    {
      path: '/Methods',
      name: 'Methods',
      component: Methods
    },
    {
      path: '/Conditionals',
      name: 'Conditionals',
      component: Conditionals
    },
    {
      path: '/Attributbinding',
      name: 'Attributbinding',
      component: Attributbinding
    },
    {
      path: '/dynamiquecssclasses',
      name: 'dynamiquecssclasses',
      component: dynamiquecssclasses
    },
    {
      path: '/ComputedProperties',
      name: 'ComputedProperties',
      component: ComputedProperties
    },
    {
      path: '/Reactivity',
      name: 'Reactivity',
      component: Reactivity
    },






  ]
})

export default router
