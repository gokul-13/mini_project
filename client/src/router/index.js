import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddStudent from '../views/AddStudent'
import StudentList from '../views/StudentList'
import AddCourse from '../views/AddCourse'
import AddMarks from '../views/AddMarks'
import ViewStudent from '../views/ViewStudent'
import SignUp from '../views/SignUp'
import Login from '../views/Login'
import StudentPage from '../views/StudentPage'
import Screen from '../views/Screen'

const routes = [

  {
    path: '/screen',
    name: 'screen',
    component: Screen
  },

  {
    path: '/home',
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
    path:'/getlist',
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

  },
  {
    path:'/viewstudent',
    name:'viewstudent',
    component:ViewStudent
  },
  {
    path:'/signup',
    name:'signup',
    component:SignUp
  },
  {
    path:'/login',
    name:'login',
    component:Login
  },
  {
    path:'/student/login',
    name:'student',
    component:StudentPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
