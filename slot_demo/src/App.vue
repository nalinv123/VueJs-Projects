<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld>
		<h1>Slot Example</h1>
		<p>This is a basic slot</p>
	</HelloWorld>
	<NamedSlot>
		<div slot="NamedSlot">
			<h1>Name Slot Example</h1>
			<p>This is a name slot</p>
		</div>
	</NamedSlot>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NamedSlot from './components/NamedSlot.vue'

export default {
  name: 'App',
  components: {
	HelloWorld,
	NamedSlot
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
