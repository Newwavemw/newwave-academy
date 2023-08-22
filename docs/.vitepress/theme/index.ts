import { h } from "vue";
import DefaultTheme from "vitepress/theme";
import { useData } from "vitepress";
import { watchEffect } from "vue";
import type { App } from "vue";
import { anu } from "anu-vue";
import "uno.css";
import "anu-vue/dist/style.css";
import "@anu-vue/preset-theme-default/dist/style.css";
import RegisterSW from "./components/RegisterSW.vue";
import Feature from "./components/uno/Feature.vue";
import "./styles.css";

export default {
  ...DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "layout-bottom": () => h(RegisterSW),
    });
  },
  enhanceApp({ app }: { app: App }) {
    app.use(anu, {
      registerComponents: true,
    });

    app.component("Feature", Feature);
  },
};
