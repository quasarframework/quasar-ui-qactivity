import { defineBoot } from "@quasar/app-vite";
import VuePlugin from "@quasar/quasar-ui-qactivity";

export default defineBoot(({ app }) => {
  app.use(VuePlugin);
});
