<template>
  <main class="container">
    <h3 class="header">The Progressive Framework</h3>
    <p class="main-content">
      <b>Vue is a framework and ecosystem that covers most of the common features needed in frontend development. However, the web is incredibly diverse - the things we build may vary significantly in form and scale. Vue is designed to be flexible and incrementally adoptable. Depending on your use case, Vue can be utilized in various ways:</b>
    </p>
    <ul class="feature-list">
      <li>Enhancing static HTML without a build step</li>
      <li>Embedding as Web Components on any page</li>
      <li>Single-Page Application (SPA)</li>
      <li>Fullstack / Server-Side Rendering (SSR)</li>
      <li>Jamstack / Static Site Generation (SSG)</li>
      <li>Targeting desktop, mobile, WebGL, and even the terminal</li>
    </ul>
    <p class="main-content">
      <b>If these concepts seem intimidating, don't worry! The tutorial and guide only require basic HTML and JavaScript knowledge. You should be able to follow along without being an expert in any of these.</b>
    </p>
    <p class="main-content">
      <b>If you're an experienced developer interested in integrating Vue into your stack or are curious about these terms, we discuss them in more detail in Ways of Using Vue.</b>
    </p>
  </main>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  font-family: 'Arial', sans-serif;
  color: #333;
}

.header {
  font-size: 32px;
  margin-bottom: 15px;
}

.main-content {
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 15px;
}

.feature-list {
  list-style-type: disc;
  padding-left: 20px;
  font-size: 16px;
  margin-bottom: 15px;
}
</style>
