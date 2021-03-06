<template>
  <div class="footer">
    <div class="footerPartOne">
      <img src="../assets/logo.png" alt="logo" />
    </div>
    <div class="footerPartTwo">
      <p>Бързо меню</p>
      <hr />
      <ul>
        <li v-for="(button, index) in navbuttons" :key="index">
          {{ button }}
        </li>
      </ul>
    </div>
    <div class="footerPartThree">
      <p>Последни публикации</p>
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String,
  },
  data() {
    return {
      navbuttons: ['Начало', 'Дарете', 'За нас', 'Контакти', 'Блог'],
    };
  },
  methods: {},
};
</script>

<style scoped>
div.footer {
  min-width: 1023px;
  width: 100%;
  display: flex;
  margin: 0;
  background-color: #66004d;
  color: white;
}

div.footerPartOne {
  margin: auto;
  width: 20%;
}

div.footerPartOne img {
  margin: 15px 40px;
  width: 30px;
  display: inline-block;
}

div.footerPartTwo {
  width: 40%;
}

div.footerPartTwo p {
  margin-bottom: 8px;
}

div.footerPartTwo p:hover {
  cursor: default;
}

div.footerPartTwo hr {
  width: 20%;
  margin-left: 0;
}

div.footerPartTwo ul {
  list-style-type: none;
  padding-left: 10px;
  margin-top: 8px;
}

div.footerPartTwo li {
  margin-top: 0;
  margin-bottom: 5px;
}

div.footerPartTwo li:hover {
  cursor: pointer;
}

div.footerPartThree {
  width: 40%;
}

div.footerPartThree p {
  margin-bottom: 8px;
}

div.footerPartThree p:hover {
  cursor: default;
}

div.footerPartThree hr {
  width: 38%;
  margin-left: 0;
}
</style>
