import type { App } from "vue";

import QActivity from "./components/QActivity";
import QActivityItem from "./components/QActivityItem";
import { version } from "./version";

function install(app: App): void {
  app.component(String(QActivity.name), QActivity);
  app.component(String(QActivityItem.name), QActivityItem);
}

export { version, QActivity, QActivityItem, install };

export default {
  version,
  QActivity,
  QActivityItem,
  install,
};
