<template>
  <div class="header">
    <div class="header__burger" @click="open">
      <img class="header__img" :src="require('@/assets/img/menu.svg')" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      if (!this.$root.sidebar.sidebar) {
        this.$root.sidebar.sidebar = true;
      } else {
        this.$root.sidebar.overlay = false;
        setTimeout(() => {
          this.$root.sidebar.sidebar = false;
        }, 100);
      }
    }
  }
};
</script>

<style scoped>
.header {
  background-color: #1e88e5;
  box-shadow: 0 2px 4px -1px rgb(0 0 0 / 20%), 0 4px 5px 0 rgb(0 0 0 / 14%),
    0 1px 10px 0 rgb(0 0 0 / 12%);
  padding: 20px;
  display: flex;
  align-items: center;
}
.header__burger {
  height: 35px;
  width: 35px;
  padding: 10px;
  background-color: transparent;
  position: relative;
  cursor: pointer;
}
.header__burger:before {
  content: "";
  height: 55px;
  width: 55px;
  background-color: #fff;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  border-radius: 50%;
  bottom: 0;
  transition: 0.3s ease;
}
.header__burger:hover:before {
  opacity: 0.08;
}
.header__burger:active:before {
  opacity: 0;
}
.header__img {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
  object-position: center;
}
</style>
