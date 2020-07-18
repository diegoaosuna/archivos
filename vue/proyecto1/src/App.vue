<template>
  <div id="app" class="container">
    <cabecera></cabecera>
    <lista></lista>

  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/lista.vue'

export default {
  name: 'App',
  components: {
    Cabecera,
    Lista
  }
}
</script>
