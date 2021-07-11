<template>
  <q-page class="flex flex-left q-gutter-lg">
    <Example1></Example1>
    <Example2></Example2>
    <Example3></Example3>
  </q-page>
</template>

<script>
import Example1 from 'components/Example1'
import Example2 from 'components/Example2'
import Example3 from 'components/Example3'

export default {
  components: {
    Example1,
    Example2,
    Example3
  },
  setup () {
    return {
    }
  }
}
</script>
