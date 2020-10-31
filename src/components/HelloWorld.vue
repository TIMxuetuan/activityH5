<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="remClass">测试rem</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.remClass{
  width: 23.44rem;
  height: 6.25rem;
  background-color: red;
  box-sizing: border-box;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
