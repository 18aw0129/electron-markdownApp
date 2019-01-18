import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Markdown-Page',
      component: require('@/MarkdownPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
