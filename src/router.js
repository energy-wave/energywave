import Vue from "vue";
import Router from "vue-router";
import Home from "./components/hello/hello.vue";
import Person from "./components/person/person.vue";
import Program from "./components/program/program.vue";

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
    }

    // {
    //   path: "/about",
    //   name: "about",
    //   component: () =>
    //     import( "./views/About.vue")
    // }
  ]
});
