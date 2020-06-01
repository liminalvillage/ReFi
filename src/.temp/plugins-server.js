import plugin_gridsome_plugin_tailwindcss_5 from "/Users/newmac/dev/microsolidarity/node_modules/gridsome-plugin-tailwindcss/gridsome.client.js"
import plugin_gridsome_vue_remark_6 from "/Users/newmac/dev/microsolidarity/node_modules/@gridsome/vue-remark/gridsome.client.js"

export default [
  {
    run: plugin_gridsome_plugin_tailwindcss_5,
    options: {"purgeConfig":{"content":["./src/**/*.vue","./src/**/*.js","./src/**/*.jsx","./src/**/*.html","./src/**/*.pug","./src/**/*.md","./docs/**/*.md","./blog/**/*.md","./src/**/*.svg"],"whitelist":["body","html","img","a","g-image","g-image--lazy","g-image--loaded","active","active--exact"],"keyframes":true,"whitelistPatterns":[{},{},{},{},{},{},{},{},{},{}]},"shouldPurge":true,"shouldImport":true,"shouldTimeTravel":true,"importUrlConfig":{"modernBrowser":true},"presetEnvConfig":{"stage":0,"autoprefixer":false,"features":{"focus-visible-pseudo-class":false,"focus-within-pseudo-class":false}}}
  },
  {
    run: plugin_gridsome_vue_remark_6,
    options: {"typeName":"Documentation","baseDir":"./docs","pathPrefix":"/docs","template":"./src/templates/Documentation.vue","plugins":[["gridsome-plugin-remark-shiki",{"theme":"Material-Theme-Palenight","skipInline":true}]],"index":["index"],"includePaths":[],"remark":{"plugins":[["gridsome-plugin-remark-shiki",{"theme":"Material-Theme-Palenight","skipInline":true}]],"externalLinksTarget":"_blank","externalLinksRel":["nofollow","noopener","noreferrer"],"anchorClassName":"icon icon-link"},"refs":{},"ignore":[]}
  }
]
