<template>
  <div class="category">
    <ul>
      <li
        v-for="item in products"
        :key="item._id"
        @click="loadDetail(item._id)"
      >
        <img :src="item.image" alt="" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
    <div class="zw"></div>
  </div>
</template>

<script>
import { reqProducts } from "../api/product";
export default {
  components: {},
  data() {
    return {
      products: [],
      list: [],
    };
  },
  computed: {},
  methods: {
    add() {},
    async loadProduct() {
      const res = await reqProducts({ cateId: 1000 });
      console.log(res);
      this.products = res.data.products;

      this.products.forEach((v) => {
        if (this.list.some((it) => it == v.category.name) == false) {
          this.list.unshift(v.category.name);
        }
      });
    },
    loadDetail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id,
        },
      });
    },
  },
  created() {
    this.loadProduct();
  },
};
</script>
<style scoped>
.zw {
  height: 3rem;
}
</style>