<template>
  <section class="container">
    <h1>{{title}}</h1>
    <p>{{message}}</p>
    <table>
      <tr>
        <th>メッセージ</th>
        <td><input v-model="post_message"></td>
      </tr>
      <tr><th></th><td>
        <button @click="addData">投稿</button>
      </td></tr>
    </table>
    <hr>
    <ul v-for="(data, key) in json_data" :key="key">
      <li><strong>{{data.post_id}}</strong>:{{data.post_message}}</li>
    </ul>
  </section>
</template>

<script>
const axios = require('axios');
let url = "https://trello-clone-28a94.firebaseio.com/posts";

export default {
  data: function(){
    return {
      title:'アクティビティログ',
      message:'てすと',
      json_data:{},
      latestpost:{},
      post_id:0,
    };
  },
  methods: {
    addData: async function() {
      this.post_id += 1;
      let add_url = url + '/' + this.post_id + '.json';
      let data = {
        'post_id':this.post_id,
        'post_message':this.post_message
      };
      axios.put(add_url, data).then((res)=>{
        this.post_message = '';
        this.getData();
      });
    },
    getData: async function() {
      axios.get(url + '.json').then((res) => {
        this.post_message = '';
        this.json_data = res.data;
      }).catch((error)=>{
        this.message = 'ERROR!';
        this.json_data = {};
      });
    }
  },
  created: function(){
    this.getData();
  }
}
</script>