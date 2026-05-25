<template>
  <router-view />
</template>

<script setup lang="ts">
import { useMeta } from "quasar";
import { useDark } from "src/.q-press/composables/dark";

import getMeta from "src/.q-press/assets/get-meta";

const { initDark } = useDark();
initDark();

useMeta({
  title: "QActivity for Vue and Quasar",
  titleTemplate: (title) => `${title} | QActivity`,

  meta: getMeta(
    "QActivity - timeline activity lists for Vue and Quasar",
    "QActivity is a Vue and Quasar component for building compact activity lists and timelines.",
  ),
});
</script>
