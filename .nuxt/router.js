import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _62dfe4b7 = () => interopDefault(import('../pages/page1.vue' /* webpackChunkName: "pages/page1" */))
const _62edfc38 = () => interopDefault(import('../pages/page2.vue' /* webpackChunkName: "pages/page2" */))
const _62fc13b9 = () => interopDefault(import('../pages/page3.vue' /* webpackChunkName: "pages/page3" */))
const _00a5f607 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/page1",
    component: _62dfe4b7,
    name: "page1"
  }, {
    path: "/page2",
    component: _62edfc38,
    name: "page2"
  }, {
    path: "/page3",
    component: _62fc13b9,
    name: "page3"
  }, {
    path: "/",
    component: _00a5f607,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
