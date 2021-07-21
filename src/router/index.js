import { createRouter, createWebHistory } from 'vue-router'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'
import EventDetails from '../views/event/Details.vue'
import EventRegister from '../views/event/Register.vue'
import EventEdit from '../views/event/Edit.vue'

const routes = [
  {
    path: '/',
    name: 'EventList',
    component: EventList,
    props: (route) =>({ page: parseInt(route.query.page || 1 ),perPage:3})
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/event/id',
    name: 'EventDetails',
    component: EventDetails,
    props: true
  },
  {
    path: '/event/:id/register',
    name: 'EventRegister',
    component: EventRegister,
    props: true
  },
  {
    path: '/event/:id/edit',
    name: 'EventEdit',
    component: EventEdit,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
