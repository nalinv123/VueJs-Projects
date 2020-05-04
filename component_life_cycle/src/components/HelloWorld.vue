<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
	<p>Counter : {{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: function() {
	  return {
		  counter: 0
	  }
  },
  beforeCreate: function() {
	  console.log("In before create");
  },
  created: function() {
	  console.log("In created");
	  setInterval(() => {
		  this.counter++;
	  }, 3000)
  },
  beforeUpdate: function() {
	  console.log("In before update with counter : ", this.counter);
  },
  updated: function() {
	  console.log("In updated");
  },
  beforeMount: function() {
	  console.log("In before mount");
  },
  mounted: function() {
	  console.log("In mounted");
  },
  beforeDestroy: function() {
	  console.log("In before destroy");
  },
  destroyed: function() {
	  console.log("In destroyed");
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
