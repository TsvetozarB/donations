<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      donateList: [
        {
          id: 'ivan',
          name: 'Иван',
          smallDescription: 'Има нужда от нови обувки за зимата.',
        },
        {
          id: 'dragan',
          name: 'Драган',
          smallDescription: 'Има нужда от дебело и топло зимно яке.',
        },
        {
          id: 'petkan',
          name: 'Петкан',
          smallDescription: 'Има нужда от шапка, шал и ръкавици.',
        },
        {
          id: 'stoyan',
          name: 'Стоян',
          smallDescription: 'Има нужда от дебел вълнен пуловер.',
        },
      ],
    };
  },
  provide() {
    return {
      donateList: this.donateList,
    };
  },
};
</script>

<style>
body {
  margin-left: 0px;
}
</style>
