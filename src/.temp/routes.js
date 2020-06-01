export default [
  {
    path: "/tag/:id/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--templates--tag-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Tag.vue")
  },
  {
    path: "/docs/vue-components-in-markdown/",
    component: () => import(/* webpackChunkName: "page--src--templates--documentation-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Documentation.vue"),
    meta: {
      $vueRemark: () => import(/* webpackChunkName: "vue-remark--docs--vue-components-in-markdown-md" */ "/Users/newmac/dev/microsolidarity/docs/vue-components-in-markdown.md")
    }
  },
  {
    path: "/blog/:page(\\d+)?/",
    component: () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/newmac/dev/microsolidarity/src/pages/Blog.vue")
  },
  {
    path: "/what-i-ate-for-breakfast/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/top-5-static-site-generators-in-vue/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/vue-vs-react-comparison/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/mac-pro-2019-review/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/how-to-get-better-at-coding/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/introduction-to-gridsome/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/freelance-vs-full-time-work/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/design-for-developers/",
    component: () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/newmac/dev/microsolidarity/src/templates/Post.vue")
  },
  {
    path: "/docs/",
    component: () => import(/* webpackChunkName: "page--src--pages--docs-vue" */ "/Users/newmac/dev/microsolidarity/src/pages/Docs.vue")
  },
  {
    name: "404",
    path: "/404/",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/newmac/dev/microsolidarity/src/pages/404.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/newmac/dev/microsolidarity/src/pages/Index.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/newmac/dev/microsolidarity/src/pages/404.vue")
  }
]

