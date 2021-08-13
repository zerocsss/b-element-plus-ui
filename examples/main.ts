import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

import Components from "../packages";

const examples = createApp(App);
examples.use(Components);
examples.use(ElementPlus);
examples.mount("#app");

export default examples;
