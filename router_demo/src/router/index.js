import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import About from "../views/About";
import Blog from "../views/Blog";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      name: "Home",
      path: "/",
      component: Home
    },
    {
      name: "About",
      path: "/about",
      component: About
    },
    {
      name: "Blog",
      path: "/blog",
      component: Blog
    }
  ]
});

export default router;
