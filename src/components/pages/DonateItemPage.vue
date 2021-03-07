<template>
  <div>
    <h3>{{ itemName }}</h3>
    <p>{{ itemDescription }}</p>
    <hr />
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus,
      dolores veniam. Laudantium, perferendis veritatis odio ullam placeat
      consectetur odit totam provident autem necessitatibus fugiat ducimus, iste
      eveniet architecto, consequatur adipisci! Lorem ipsum dolor sit amet
      consectetur, adipisicing elit. Accusamus, dolores veniam. Laudantium,
      perferendis veritatis odio ullam placeat consectetur odit totam provident
      autem necessitatibus fugiat ducimus, iste eveniet architecto, consequatur
      adipisci!Lorem ipsum dolor sit amet consectetur, adipisicing elit.
      Accusamus, dolores veniam. Laudantium, perferendis veritatis odio ullam
      placeat consectetur odit totam provident autem necessitatibus fugiat
      ducimus, iste eveniet architecto, consequatur adipisci!Lorem ipsum dolor
      sit amet consectetur, adipisicing elit. Accusamus, dolores veniam.
      Laudantium, perferendis veritatis odio ullam placeat consectetur odit
      totam provident autem necessitatibus fugiat ducimus, iste eveniet
      architecto, consequatur adipisci!
    </p>
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
      itemName: '',
      itemDescription: '',
    };
  },
  created() {
    const donateID = this.$route.params.itemId;
    const selectedItem = this.donateList.find((item) => item.id === donateID);
    this.itemName = selectedItem.name;
    this.itemDescription = selectedItem.smallDescription;
    console.log(this.itemName);
    console.log(this.itemDescription);
  },
  methods: {},
};
</script>

<style scoped>
div {
  margin: auto;
  width: 80%;
  text-align: center;
  margin-top: 100px;
  color: black;
}

hr {
  width: 500px;
  background: black;
  border: 1px solid black;
}
</style>
