import { createApp } from "vue"
import App from "./App.vue"
import "./assets/style/main.scss"
import components from "./components/components"

const app = createApp(App)

components.register(app)

app.mount("#app")
