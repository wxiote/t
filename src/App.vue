<template>
  <div id="app">
    <main>
      <MenuView v-if="activeTab === 'home'" @open="openTab" />
      <div v-if="activeTab === 'italie2'" class="scene">
        <MapView />
      </div>
      <div v-if="activeTab === 'velov'" class="scene">
        <VelovView />
      </div>
    </main>
  </div>
</template>

<script>
import MenuView from './components/MenuView.vue'
import MapView from './components/MapView.vue'
import VelovView from './components/VelovView.vue'

export default {
  components: { MenuView, MapView, VelovView },
  data() {
    return {
      activeTab: 'home'
    }
  },
  methods: {
    openTab(tab) {
      if (tab === 'italie2') {
        this.activeTab = 'italie2'
      } else if (tab === 'velov') {
        this.activeTab = 'velov'
      } else {
        this.activeTab = 'home'
      }
    }
  }
}
</script>

<style scoped>
main { padding:0; min-height:100vh; }
</style>
