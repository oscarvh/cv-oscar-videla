import htmlPurge from 'vite-plugin-purgecss'
import {createHtmlPlugin} from 'vite-plugin-html'
import {resolve} from 'path'
import { defineConfig } from 'vite'

const root = resolve(__dirname,'src')
const outDir = resolve(__dirname,'dist')

export default defineConfig({
  root,
  plugins:[
    htmlPurge(),
    createHtmlPlugin({
      minify:true,
      removeCommentes:true
    })
  ],
  build: {
    outDir,
    emptyOutDir:true,
    rollupOptions: {
        input: {
            main:resolve(root,'index.html'),
            minimalista:resolve(root,'minimalista.html')
          }
    },
  }
});
