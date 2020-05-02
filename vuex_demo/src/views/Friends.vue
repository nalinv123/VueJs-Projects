<template>
	<div>
		<h1>Friends</h1>
		<div class="listDiv">
		<ul v-if="friendsList.length" class="ulList">
			<li v-for="(friend, index) of friendsList" v-bind:key="friend" >
				<a @click="addFriend(index)">{{ friend }}</a>
			</li>
		</ul>
		<p v-else>You added all the friends.</p>
		<button v-on:click="goBackHome">Go back Home</button>
		</div>
	</div>
</template>

<script>
export default {
  name: 'Friends',
  mounted () {
    this.getFriendsList()
  },
  data: function () {
    return {
      friendsList: []
    }
  },
  methods: {
    goBackHome () {
      this.$router.push('/')
    },
    getFriendsList () {
      this.friendsList = this.$store.state.friends
    },
    addFriend (selectedFriendIndex) {
      this.$store.dispatch({
        type: 'addFriend',
        friendName: selectedFriendIndex
      })
    }
  }
}
</script>

<style scoped>
.listDiv {
	display: inline-block
}
.ulList {
	list-style-type: decimal;
	cursor: pointer;
}
</style>
