<template>
	<div>
		<h1>Home</h1>
		<p>Currently we have <strong>{{ friendCount }}</strong> friends.</p>
		<button v-on:click="addFriend">Add Some Friends</button>
	</div>
</template>

<script>
export default {
  name: 'Home',
  mounted () {
    this.getFriendsCount()
  },
  data: function () {
    return {
      friendCount: 0
    }
  },
  computed: {

  },
  methods: {
    getFriendsCount () {
      this.friendCount = this.$store.state.currentFriends.length
    },
    addFriend () {
      this.$router.push('friends')
    }
  }
}
</script>
