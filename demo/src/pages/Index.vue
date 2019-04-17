<template>
  <q-page class="flex flex-left q-gutter-lg">

    <example1 />
    <example2 />
    <example3 />

    <!-- <div class="q-pb-lg"></div> -->

  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageIndex',

  components: {
    'example1': () => import('../components/Example1'),
    'example2': () => import('../components/Example2'),
    'example3': () => import('../components/Example3')
  },

  data () {
    return {
    }
  }
}
</script>
