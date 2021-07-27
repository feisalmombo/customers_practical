<template>
  <div class="Users">
    <!-- <ul>
      <li v-for="(data, index) in users" v-bind:key="index">
        First Name: {{ data.first_name }} {{ data.last_name }}</li>
    </ul> -->

    <table class="table table-striped">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in users" v-bind:key="index">
            <td>{{data.first_name}}</td>
            <td>{{data.last_name}}</td>
            <td>{{data.email}}</td>
          </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      users: []
    }
  },
  methods: {
  },
  created: function(){
    this.$http.get("http://localhost/slimapp/api/customers")
    .then(res => {
      this.users = res.body;
      console.log(res.body);
    });
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
