import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../components/common/Home.vue'),
    meta: { title: '首页' },
    children: [{
      path: '/dashboard',
      component: () => import('../views/Dashboard.vue'),
      meta: { title: '首页' },
    }]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  }
];
const router = new VueRouter({
  routes
});
export default router;
router.beforeEach((to, from, next) => {
  // next()
  document.title = to.meta.title || ''
  const role = localStorage.getItem('ms_username');
  console.log(role)
  if (!role && to.path !== '/login') {
    console.log('111')
    next({
      path: '/login'
    })
    console.log('222')
  } else if (to.path !== '/login') {
    next()
  } else {
    next()
  }
})