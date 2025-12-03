<template>
  <main class="menu-landing">
    <h1 class="landing-title">Projets — Portefeuille</h1>
    <p class="lead">Sélectionne un projet pour l'ouvrir. Clique sur une vignette pour y accéder.</p>

    <div class="project-grid">
      <article class="project-tile" @click="$emit('open', 'italie2')" role="button" tabindex="0">
        <div class="project-badge">Italie 2</div>
        <h2>Plan du centre commercial</h2>
        <p>Visualisation multi-étages, overlays et gestion des parkings.</p>
        <div class="project-cta">Ouvrir</div>
      </article>

      <article class="project-tile disabled" aria-disabled="true">
        <div class="project-badge">Coming</div>
        <h2>Autre projet</h2>
        <p>Prototype — à venir.</p>
        <div class="project-cta">Bientôt</div>
      </article>
    </div>

    <section class="help">
      <h3>Hébergement</h3>
      <p>Ce projet utilise Vite + Vue. Pour déployer rapidement, utilisez Vercel (commande `vercel` ou import depuis GitHub).</p>
    </section>
  </main>
</template>

<script>
export default {
  name: 'MenuView'
}
</script>

<style scoped>
.menu-landing { padding: 20px }
.landing-title { font-size: 28px; margin: 0 0 6px }
.lead { color:#555; margin-bottom:16px }
.project-grid { display:grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap:16px }
.project-tile { background:#fff; border:1px solid #e6e6e6; padding:16px; border-radius:8px; cursor:pointer; box-shadow:0 6px 18px rgba(0,0,0,0.04); display:flex; flex-direction:column; gap:8px }
.project-tile.disabled { opacity:0.6; cursor:not-allowed }
.project-badge { font-size:12px; background:#2171b5; color:#fff; display:inline-block; padding:4px 8px; border-radius:4px }
.project-cta { margin-top:auto; align-self:flex-end; background:#2171b5; color:#fff; padding:8px 12px; border-radius:6px }
.help { margin-top:18px; font-size:14px; color:#444 }
</style>
