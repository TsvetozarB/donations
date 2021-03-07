<template>
  <div>
    <h2>This is donate page!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
      dolores veniam. Laudantium, perferendis veritatis odio ullam placeat
      consectetur odit totam provident autem necessitatibus fugiat ducimus, iste
      eveniet architecto, consequatur adipisci! Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Accusamus, dolores veniam. Laudantium,
      perferendis veritatis odio ullam placeat consectetur odit totam provident
      autem necessitatibus fugiat ducimus, iste eveniet architecto, consequatur
      adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Accusamus, dolores veniam.
    </p>
    <div class="donateList">
      <ul>
        <li v-for="donate in donateList" :key="donate.id">
          <cta-donate :data="donate" @selected="gotoDonate" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CtaDonate from '../small/CtaDonate.vue';
export default {
  name: 'DonatePage',
  inject: ['donateList'],
  components: {
    CtaDonate,
  },
  props: {},
  data() {
    return {};
  },
  methods: {
    gotoDonate(id) {
      this.$router.push({ path: `/donate/${id}` });
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
  color: black;
}

h2 {
  margin-top: 100px;
  color: black;
}

p {
  margin: auto;
  width: 80%;
}

button.btn-don {
  margin: 10px 10px;
  text-align: left;
  background-color: #66004d;
  border-radius: 5px;
  color: #fff;
}

div.donateList {
  margin-bottom: 40px;
}

div.donateList ul {
  margin-top: 40px;
  width: 96%;
  display: flex;
  list-style-type: none;
}

div.donateList ul li {
  width: 23%;
  text-align: center;
  margin-right: 10px;
}
div.donateList ul li div {
  border-style: solid;
  border-radius: 80px;
  height: 120px;
}
div.donateList ul li div button {
  border-color: #66004d;
}
</style>
