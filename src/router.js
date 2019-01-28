import Vue from "vue";
import Router from "vue-router";
import Home from "./components/hello/hello.vue";
import Person from "./components/person/person.vue";
import Program from "./components/program/program.vue";
import About from "./components/about/about.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/person",
      name: "person",
      component: Person
    },
    {
      path: "/program",
      name: "program",
      component: Program
    },
    {
      path: "/about",
      name: "about",
      component: About
    },

    {
      path: "/p1",
      name: "p1",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "p1" */ "./views/p1.vue")
    },
    {
      path: "/p2",
      name: "p2",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "p2" */ "./views/p2.vue")
    },
    {
      path: "/p2c",
      name: "p2c",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "p2" */ "./views/p2c.vue")
    },
    {
      path: "/p3",
      name: "p3",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "p3" */ "./views/p3.vue")
    },
    {
      path: "/p3c",
      name: "p3c",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "p3c" */ "./views/p3c.vue")
    }
  ]
});
