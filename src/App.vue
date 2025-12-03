<template>
  <div id="app">
    <main>
      <MenuView v-if="activeTab === 'home'" @open="openTab" />
      <div v-if="activeTab === 'italie2'" class="scene">
        <MapView @back="openTab('home')" />
      </div>
      <div v-if="activeTab === 'velov'" class="scene">
        <VelovView @back="openTab('home')" />
      </div>
      <div v-if="activeTab === 'zonzon'" class="scene">
        <ZonzonView @back="openTab('home')" />
      </div>
    </main>
  </div>
</template>

<script>
import MenuView from './components/MenuView.vue'
import MapView from './components/MapView.vue'
import VelovView from './components/VelovView.vue'
import ZonzonView from './components/ZonzonView.vue'

export default {
  components: { MenuView, MapView, VelovView, ZonzonView },
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
      } else if (tab === 'zonzon') {
        this.activeTab = 'zonzon'
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
