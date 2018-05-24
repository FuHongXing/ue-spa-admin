import Vue from 'vue'
import Router from 'vue-router'
const _import = require('./_import_' + process.env.NODE_ENV)
// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/** note: submenu only apppear when children.length>=1
 *   detail see  https://panjiachen.github.io/vue-element-admin-site/#/router-and-nav?id=sidebar
 **/

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirct in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta: {
  roles: ['admin', 'editor']     will control the page roles(you can set multiple roles)
  title: 'title'                 the name show in submenu and breadcrumb(recommend set)
  icon: 'svg-name'               the icon show in the sidebar,
  noCache: true                  if true, the page will no be cached(default is false)
}
**/
export const constantRouterMap = [{
  path: '/login',
  component: _import('login/index'),
  hidden: true
}, {
  path: '',
  component: Layout,
  redirect: 'dashboard',
  name: 'Dashboard',
  children: [{
    path: 'dashboard',
    component: _import('dashboard/index'),
    meta: {
      title: 'dashboard',
      icon: 'dashboard'
    }
  }]
}]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
})

export const asyncRouterMap = [{
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  name: 'Example',
  meta: {
    title: 'example',
    icon: 'example'
  },
  children: [{
    path: 'table',
    name: 'Table',
    component: _import('table/index'),
    meta: {
      title: 'table',
      icon: 'table'
    }
  },
  {
    path: 'tree',
    name: 'Tree',
    component: _import('tree/index'),
    meta: {
      title: 'tree',
      icon: 'tree'
    }
  }
  ]
}, {
  path: '/form',
  component: Layout,
  children: [{
    path: 'index',
    name: 'Form',
    component: _import('form/index'),
    meta: {
      title: 'form',
      icon: 'form'
    }
  }],
  meta: {
    roles: ['admin'] // you can set roles in root nav}
  }
},
{
  path: '/i18n',
  component: Layout,
  children: [{
    path: 'index',
    name: 'i18n',
    component: _import('i18n/index'),
    meta: {
      title: 'i18n',
      icon: 'international'
    }
  }]
},
{
  path: '/permission',
  component: Layout,
  redirect: '/permission/index',
  alwaysShow: true, // will always show the root menu
  meta: {
    title: 'permission',
    icon: 'lock',
    roles: ['admin', 'editor'] // you can set roles in root nav
  },
  children: [{
    path: 'page',
    component: _import('permission/page'),
    name: 'pagePermission',
    meta: {
      title: 'pagePermission',
      roles: ['admin'] // or you can only set roles in sub nav
    }
  }, {
    path: 'directive',
    component: _import('permission/directive'),
    name: 'directivePermission',
    meta: {
      title: 'directivePermission'
      // if do not set roles, means: this page does not require permission
    }
  }]
},
{
  path: '/404',
  component: _import('404'),
  hidden: true
},

{
  path: '*',
  redirect: '/404',
  hidden: true
}
]
