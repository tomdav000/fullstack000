<template>
  <div class="container">
    <h1 class="text-center">Girls</h1>
    <div class="row row-cols-3">
      <div v-for='girl in girls' :key='girl.id'>
        <div class="card mb-2">
        <img class="img-fluid" :src="`${img}/${girl.pic}`"/>
        <h3 class="fs-3 text-center">{{girl.name}}</h3>
        <h6 class="fs-6 text-center">{{girl.id}}</h6>
        <button align='center'><RouterLink :to="`/girls/${girl.id}`">View Details</RouterLink></button>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import.meta.env.VITE_PHOTOS_URL
export default {
  data(){
    return{
      girls:[],
      img: import.meta.env.VITE_PHOTOS_URL,
    }
  },
  async created(){
    const res = await axios.get('/api/girls')
    this.girls = res.data
    console.log(this.girls)
  }
}

</script>