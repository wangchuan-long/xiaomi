<template>
  <div class="category">
    <ul>
      <li v-for="item in products" :key="item._id" @click="loadDetail(item._id)">
        <img :src="item.image" alt="">
        <span>{{item.name}}</span>
      </li>
      <!-- <router-link :to="{name:'detail',query:{id:item.id}}" v-for="item in products" :key="item._id" @click="loadDetail(item._id)">
        <img :src="item.image" alt="">
        <span>{{item.name}}</span>
     </router-link> -->
    </ul>
    <div class="zw">

    </div>
  </div>
</template>

<script>
import {reqProducts} from '../api/product'
export default {
  components: {},
  data() {
    return {
      products:[],
    };
  },
  computed: {},
  methods: {
    async loadProduct(){
      const res = await reqProducts();
      console.log(res);
      this.products = res.data.products;
    },
    loadDetail(id){
      this.$router.push({
        name:'Detail',
        query: {
						id,
					},
     })
   }
  },
  created() {
    this.loadProduct()
  },
};
</script>
<style scoped>
.zw{
  height: 3rem;
}
</style>