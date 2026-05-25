import { describe, expect, it } from "vitest";

import QActivity from "../src/components/QActivity";
import QActivityItem from "../src/components/QActivityItem";
import Plugin, {
  install,
  QActivity as NamedQActivity,
  QActivityItem as NamedQActivityItem,
} from "../src";

describe("QActivity exports", () => {
  it("exports installable components", () => {
    expect(QActivity.name).toBe("QActivity");
    expect(QActivityItem.name).toBe("QActivityItem");
    expect(NamedQActivity).toBe(QActivity);
    expect(NamedQActivityItem).toBe(QActivityItem);
    expect(Plugin.install).toBe(install);
  });
});
