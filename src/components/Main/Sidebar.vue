<template>
  <div class="sidebar">
    <router-link
      v-for="link in links"
      :key="link.url"
      tag="li"
      active-class="active"
      :to="link.url"
      :exact="link.exact"
      class="router-link"
    >
      <a href="#">{{ link.title }}</a>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {title: 'home', url: '/', exact: true},
        {title: 'about', url: '/about'},
      ]
    }
  },
}
</script>

<style scoped>
.sidebar {
  background-color: tomato;
  padding: 20px;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 50%);
  overflow: hidden;
}
.router-link {
  list-style-type: none;
}
.router-link a {
  text-decoration: none;
  color: inherit;
}
</style>
