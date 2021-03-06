<template>
  <div>
    <h2>This is Donate Item page!</h2>
    <h4>{{ donateList.name }}</h4>
    <p>{{ donateList.smallDescription }}</p>
  </div>
</template>

<script>
export default {
  name: 'DonateItemPage',
  inject: ['donateList'],
  components: {},
  props: {},
  data() {
    return {
      testprops: 'This should be changed',
    };
  },
  methods: {},
};
</script>

<style scoped>
h2 {
  margin-top: 100px;
  color: black;
}

h4 {
  color: black;
}

p {
  color: black;
}
</style>
