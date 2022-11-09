import type { App } from "vue"
import * as components from "./components"

const FerryLibrary = {
  install(app: App) {
    for (const componentKey in components) {
      app.use((components as any)[componentKey])
    }
  },
}

export default FerryLibrary

export * from "./components"
