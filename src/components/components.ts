import type { App } from "vue"
import { FerryFileUpload } from "./file-upload"

export default {
  register(app: App<Element>) {
    app.component("FileUpload", FerryFileUpload)
  },
}
