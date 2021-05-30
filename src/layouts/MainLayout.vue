<template>
  <div class="page">
    <Header class="header" />

    <main class="main">
      <Sidebar class="sidebar" :class="{ 'sidebar-hide': !$root.sidebar.sidebar }" />
      <div class="view">
        <div
          class="overlay"
          v-if="$root.sidebar.sidebar"
          @click="close"
          :class="{ 'overlay-dark': $root.sidebar.overlay }"
        ></div>
        <router-view />
      </div>
    </main>

    <Footer class="footer" />
  </div>
</template>

<script>
import Header from "@/components/Main/Header";
import Sidebar from "@/components/Main/Sidebar";
import Footer from "@/components/Main/Footer";

export default {
  name: "main-layout",
  components: {
    Header,
    Sidebar,
    Footer
  },
  methods: {
    close() {
      this.$root.sidebar.overlay = false;
      setTimeout(() => {
        this.$root.sidebar.sidebar = false;
      }, 100);
    }
  },
  watch: {
    "$root.sidebar.sidebar": function() {
      if (this.$root.sidebar.sidebar) {
        setTimeout(() => {
          this.$root.sidebar.overlay = true;
        }, 100);
      } else {
        this.$root.sidebar.overlay = false;
      }
    }
  }
};
</script>

<style scoped>
.page {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: auto 1fr auto;
  grid-template-areas:
    "hd hd hd hd hd hd hd hd hd hd hd hd"
    "main main main main main main main main main main main main"
    /* "sd sd sd sd main main main main main main main main" */
    "ft ft ft ft ft ft ft ft ft ft ft ft";
  min-height: 100vh;
  overflow: hidden;
}
.header {
  grid-area: hd;
  height: 100px;
}
.footer {
  grid-area: ft;
  height: 100px;
}
.main {
  grid-area: main;
  display: flex;
  position: relative;
}
.sidebar {
  grid-area: sd;
  width: 300px;
  top: 0;
  bottom: 0;
  transition: 0.3s ease;
  position: absolute;
  z-index: 2;
}
.sidebar-hide {
  padding: 0;
  transform: translateX(-100%);
}
.view {
  display: grid;
  width: 100%;
  place-items: center;
  transition: 0.3s;
  position: relative;
}
.overlay {
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  transition: 0.2s ease;
  opacity: 0;
}
.overlay-dark {
  opacity: 1;
  background-color: rgb(0, 0, 0, 30%);
}
</style>
