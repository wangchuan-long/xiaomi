<template>
  <div class="intellect">
    <div class="Products">
      <div class="p_list" v-for="item in products" :key="item._id">
        <div class="p_img">
          <img :src="item.image" alt="" />
        </div>
        <p class="p_title">{{ item.name }}</p>
        <p class="p_price">￥{{ item.price }}起</p>
        <van-button type="primary" class="p_btn" @click="godetail(item._id)"
          >立刻购买</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { reqProducts } from "../../../api/product";
export default {
  components: {},
  data() {
    return {
      products: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 初始化
    async init() {
      const result = await reqProducts({ cateId: 11000 });
      if (result.status === 200) {
        this.products = result.data.products;
      }
    },
    // 去详情页
    godetail(id) {
      this.$router.push({
        name: "Detail",
        query: { id },
      });
    },
  },
  created() {
    this.init();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.Products {
  width: 100%;
  padding: 100px 0 52px;
  margin-top: 10px;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.p_list {
  flex: 1;
  width: 200px;
  text-align: center;
}
.p_img img {
  width: 200px;
  height: 180px;
  background: #f5f5f5;
}
.p_title {
  margin: 10px 0;
  color: rgba(0, 0, 0, 0.87);
}
.p_price {
  color: #ea625b;
}
.p_btn {
  width: 110px;
  height: 30px;
  margin: 10px auto;
  display: block;
  background: #ea625b;
  color: white;
  border: 0;
  padding: 0;
  border-radius: 4px;
}
</style>