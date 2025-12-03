<template>
  <div class="velov-container">
    <div id="velov-map" class="map-canvas"></div>
    <div class="map-title">69 en velo'v</div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'

export default {
  name: 'VelovView',
  mounted() {
    this.initMap()
  },
  methods: {
    initMap() {
      mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN
      
      this.map = new mapboxgl.Map({
        container: 'velov-map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [4.8357, 45.7640], // Lyon center
        zoom: 12
      })

      this.map.addControl(new mapboxgl.NavigationControl(), 'top-right')
    }
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove()
    }
  }
}
</script>

<style scoped>
.velov-container {
  position: relative;
  width: 100%;
  height: 100vh;
}

.map-canvas {
  width: 100%;
  height: 100%;
}

.map-title {
  position: absolute;
  top: 20px;
  left: 20px;
  background: rgba(255, 255, 255, 0.95);
  padding: 12px 24px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  z-index: 1;
}
</style>
