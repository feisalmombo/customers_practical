<template>
  <div class="Users">
    <ul>
      <li v-for="(data, index) in users" v-bind:key="index">{{data.name}}</li>
    </ul>

    <input type="text" v-model="newUser.name" name="" id="" placeholder="Enter user name">
    <br>
    <br>
    <button v-on:click="makeuser">Make user</button>
    <button v-on:click="deleteUser(user)">X</button>

    {{ fetchUsers() }}

  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      newUser: [],
      user: '',
      email: "feisalmombo29@gmail.com",
      users: [
        {name: "Feisal"},
        {name: "Johanan"},
        {name: "Joan"}
      ]
    }
  },
  props: {
    msg: String
  },
  methods: {
    adduser() {
      console.log(this.name);
    },
    makeuser: function() {
      this.users.push({
        name: this.newUser.name
      });
    },
    deleteUser: function(user) {
      this.users.splice(this.users.indexOf(user), 1);
    },
    fetchUsers(){
        this.$http.get('http://localhost/slimapp/api/customers')
          .then(function(response){
            this.customers = response.body;
            console.log(response.body);
          });
    },
  },
  created: function(){
      this.fetchUsers();
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
