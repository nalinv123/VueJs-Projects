<template>
  <div id="app">
    <h1>Vue.js Component life cycle</h1>
    <HelloWorld v-if="isComponentAlive" msg="This is a basic application which demonstrate the Vue.js component life cycle"/>
	<button v-on:click="destroyComponet">Destroy component</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data: function() {
	  return {
		  isComponentAlive: true
	  }
  },
  methods: {
	  destroyComponet() {
		  this.isComponentAlive = false
	  }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
