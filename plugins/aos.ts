// aos.js
import Vue from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const aosPlugin = {
  install: (): void => {
    AOS.init({
      // add your settings here
    })
  }
}

if (process.client) {
  Vue.use(aosPlugin)
}
