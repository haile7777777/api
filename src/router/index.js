import Vue from 'vue'
import Router from 'vue-router'
import InterfaceIntro from '../components/interface-intro/interface-intro'
import PostQuery from '../components/post-query/post-query'


Vue.use(Router)

export default new Router({
  routes: [
    {path: '/interface', component: InterfaceIntro},
    {path: '/query', component: PostQuery}
  ]
})
