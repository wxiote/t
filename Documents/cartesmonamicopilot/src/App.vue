<template>
  <div id="app">
    <header class="app-header">
      <nav class="tabs">
        <button :class="{active: activeTab==='home'}" @click="activeTab='home'">Page de garde</button>
        <button :class="{active: activeTab==='italie2'}" @click="openTab('italie2')">Italie 2</button>
      </nav>
      <h1 class="app-title">Cartes — Centre commercial</h1>
    </header>

    <main>
      <MenuView v-if="activeTab === 'home'" @open="openTab" />
      <div v-if="activeTab === 'italie2'" class="scene">
        <MapView />
      </div>
    </main>
  </div>
</template>

<script>
import MenuView from './components/MenuView.vue'
import MapView from './components/MapView.vue'

export default {
  components: { MenuView, MapView },
  data() {
    return {
      activeTab: 'home'
    }
  },
  methods: {
    openTab(tab) {
      if (tab === 'italie2') {
        this.activeTab = 'italie2'
      } else {
        this.activeTab = 'home'
      }
    }
  }
}
</script>

<style scoped>
.app-header { display:flex; align-items:center; gap:12px; padding:8px 16px; background:#fff; box-shadow:0 1px 6px rgba(0,0,0,0.06) }
.tabs { display:flex; gap:8px }
.tabs button { padding:8px 12px; background:transparent; border:0; cursor:pointer }
.tabs button.active { border-bottom:2px solid var(--accent); color:var(--accent); font-weight:600 }
.app-title { margin-left:16px }
main { padding:12px; }
</style>
