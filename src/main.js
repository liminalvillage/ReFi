// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueScrollTo from 'vue-scrollto'
import VueFuse from 'vue-fuse'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
  })

  Vue.use(VueFuse)

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS'
  })

  head.meta.push({
    name: 'description',
    content: 'Microsolidarity practice call'
  })

  head.meta.push({
    name: 'author',
    content: 'Hackalong'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Nunito+Sans:400,700'
  })

  // Add an external Javascript before the closing </body> tag
  head.script.push({
    src: 'https://js.tito.io/v1',
    async: true, 
    body: true
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://css.tito.io/v1.1'
  })

  head.script.push({
    TitoDevelopmentMode: true
  })
  
  
}


