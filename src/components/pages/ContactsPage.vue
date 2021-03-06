<template>
  <div>
    <h2>This is contacts page!</h2>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
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
</style>
