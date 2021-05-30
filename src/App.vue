<template>
  <div id="app">
    <transition name="fade">
      <component :is="layout"><router-view /></component>
    </transition>
  </div>
</template>

<script>
import EmptyLayout from "@/layouts/EmptyLayout";
import MainLayout from "@/layouts/MainLayout";

export default {
  components: { EmptyLayout, MainLayout },
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    }
  }
};
</script>
