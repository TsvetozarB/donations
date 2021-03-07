<template>
  <div>
    <h4>{{ data.name }}</h4>
    <p>{{ data.smallDescription }}</p>
    <button @click="$emit('selected', data.id)">Помогнете...</button>
  </div>
</template>

<script>
export default {
  name: 'CtaDonate',
  props: {
    data: Object,
  },
  data() {
    return {};
  },
};
</script>
<style scoped>
button {
  margin: 10px 10px;
  text-align: left;
  background-color: #66004d;
  border-radius: 5px;
  color: #fff;
}
</style>
