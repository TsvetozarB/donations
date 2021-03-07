<template>
  <div class="navbar">
    <img src="../assets/logo.png" alt="logo" />
    <ul>
      <li>
        <router-link to="/">Начало</router-link>
      </li>
      <li>
        <router-link to="/donate">Дарете</router-link>
      </li>
      <li>
        <router-link to="/about">За нас</router-link>
      </li>
      <li>
        <router-link to="/contacts">Контакти</router-link>
      </li>
      <li>
        <router-link to="/blog">Блог</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
div.navbar {
  z-index: 10;
  opacity: 1;
  display: inline-block;
  width: 100%;
  height: 60px;
  background-color: #66004d;
  position: fixed;
  top: 0;
}

img {
  margin: 15px 40px;
  width: 30px;
  display: inline-block;
}

ul {
  list-style-type: none;
  display: block;
  padding: 0;
  float: right;
  margin-right: 150px;
}

li {
  margin: 0 15px;
  display: inline-block;
  font-size: 20px;
}

li a {
  color: white;
  text-decoration: none;
}

a:hover {
  cursor: pointer;
}

li a:hover,
li a:active,
a.nav-exact-active,
a.nav-active {
  color: #f1a80a;
  border-color: #f1a80a;
}
</style>
