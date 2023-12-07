<template>
  <div class="container">
    <div v-if="girl">
      <div class="row row-cols-1">
      <div class="card">
        <img class="img-fluid" :src="/assets/+`${girl.pic}`"/>
        <h1 class="text-center">{{girl.name}}</h1>
      </div>
    </div>
    </div>
    <div v-else>
      <NotFoundPage/>
    </div>
  </div>
</template>

<script>
import {girls} from '../temp-data'
import axios from 'axios'
import NotFoundPage from './NotFoundPage.vue'
export default{
  data(){
    return{
      girl: {},
    }
  },
  components:{
    NotFoundPage
  },
  async created(){
    const res = await axios.get(`/api/girls/${this.$route.params.id}`)
    const girl = res.data
    this.girl = girl
  }
}

/*
const girl = (girls) =>{
  girls.find(girl.id === this.$route.params.id)
  return girl
}

*/

</script>