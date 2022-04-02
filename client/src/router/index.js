import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddStudent from '../views/AddStudent'
import StudentList from '../views/StudentList'
import AddCourse from '../views/AddCourse'
import AddMarks from '../views/AddMarks'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path:'/addStudent',
    name:'addStudent',
    component: AddStudent
  },
  {
    path:'/getlist/',
    name:'getlist',
    component:StudentList,
    props:true
  },
  {
    path:'/addcourse',
    name:'addcourse',
    component:AddCourse

  },
  {
    path:'/addmarks',
    name:'addmarks',
    component:AddMarks

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
