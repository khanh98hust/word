<template>
  <div class="container">
    <h1 style="color : white; font-size : 90px" class="text-center">Note !</h1>
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
    </div>
    <br>
    <form class="form">
      <input v-model="word" type="text" class="form-control">
      <button type="submit" class="btn btn-primary mt-3" @click.prevent="postValue">Add</button>
    </form>
    <!-- <h3>valule : {{ arr }}</h3> -->
    <div class="d-flex">
      <div v-for="(a, index) in arr" :key="index" class="mr-3 list-item align-item-center">
          <h3>{{ a.name }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../services/api';
  export default {
    data(){
      return{
        word : '',
        arr : []
      }
    },
    methods: {
      postValue(){
        axios.post('/word.json', {name : this.word})
        .then(res => {
          this.word = '';
          this.getValue()
        })
        .catch(err => console.log(err))
      },
      getValue(){
        console.log('object');
        axios.get('/word.json')
        .then(res =>{
            let pew = [];
            for(let a in res.data){
              console.log(a);
              pew.push(res.data[a]);
            }
            this.arr = pew
        })
        .catch(err => console.log(err))
      }   
    },
    created(){
      this.getValue()
    }
  }
</script>

<style scoped>
  .list-item{
    width: 900px;
    height: 100px;
    background-color: antiquewhite;
    flex-wrap: wrap;
  }
</style>