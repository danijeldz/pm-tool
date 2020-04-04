import Vue from "vue"
import VueRouter from "vue-router"
import Dashboard from "../views/Dashboard.vue"
import Project from "../views/Projects.vue"
import Team from "../views/Team.vue"
import SingleProject from "../views/SingleProject"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/projects",
    name: "project",
    component: Project
  },
  {
    path: "/team",
    name: "team",
    component: Team
  },
  {
    path: "/project/:project_slug",
    name: "SingleProject",
    component: SingleProject
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
