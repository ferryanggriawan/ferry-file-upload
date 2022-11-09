import type { App, Plugin } from "vue"
import FileUploadVue from "./FileUpload.vue"

export default {
  install(Vue: App) {
    Vue.component(FileUploadVue.name, FileUploadVue)
  },
} as Plugin

export { FileUploadVue as FerryFileUpload }
