<template>
  <div class="allPart">
    <div class="firstPart">
      <div class="mainText">
        <h2>{{ titlePartOne }}</h2>
        <p>
          {{ descriptionPartOne }}
        </p>
        <button @click="goToLearnMore">Научете повече...</button>
      </div>
      <div class="donateList">
        <ul>
          <li v-for="donate in donateList" :key="donate.id">
            <cta-donate :data="donate" @selected="gotoDonate" />
          </li>
        </ul>
      </div>
    </div>
    <div class="secondPart">
      <h3>{{ titlePartTwo }}</h3>
      <p>
        {{ descriptionPartTwo }}
      </p>
    </div>
  </div>
</template>
<script>
import CtaDonate from '../small/CtaDonate.vue';
export default {
  name: 'MainPage',
  inject: ['donateList'],
  components: {
    CtaDonate,
  },
  methods: {
    goToLearnMore() {
      this.$router.push('/learn-more');
    },
    gotoDonate(id) {
      this.$router.push({ path: `/donate/${id}` });
    },
  },
  props: {
    test: null,
  },
  data() {
    return {
      titlePartOne: 'Всички можем да помогнем!',
      descriptionPartOne:
        'Знаете ли колко малко трябва на едно дете за да е щастливо? Вашата помощ има значение!',
      titlePartTwo: 'Каква е нашата мисия?',
      descriptionPartTwo:
        'Фондацията приема не финансови дарения, които се използват за подкрепата на деца от домове и семейства в затруднено положени.',
    };
  },
};
</script>
<style scoped>
div.allPart {
  margin-top: -40px;
  width: 1023px;
}
div.firstPart {
  margin: 0;
  background-image: url('../../assets/bg-img.jpg');
  background-position: center;
  background-repeat: no-repeat;
  transform: translate3d(0px, 0px, 0px);
  background-size: auto;
  height: 500px;
}

div.mainText {
  margin: 0 auto;
  display: block;
  width: 500px;
  margin-bottom: 60px;
  color: white;
}
h2 {
  text-align: center;
  margin-top: 100px;
  padding-top: 40px;
  font-size: 45px;
  line-height: 50px;
  margin-bottom: 10px;
  font-family: Montserrat;
  text-transform: uppercase;
  letter-spacing: 0;
  font-weight: 800;
}
div.mainText p {
  text-align: center;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
}
button {
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
div.secondPart {
  margin: 0 auto;
  display: block;
  width: 500px;
  height: 200px;
}
div.secondPart h3 {
  text-align: center;
  margin-top: 100px;
  font-size: 35px;
  line-height: 50px;
  margin-bottom: 10px;
  font-family: Montserrat;
  text-transform: uppercase;
  letter-spacing: 0;
  font-weight: 800;
}
div.secondPart p {
  text-align: center;
}
</style>
