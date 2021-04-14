<template>
  <div class="category">
    <van-nav-bar fixed title="分类" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="back" />
      </template>
      <template #right>
        <van-icon name="search" size="30" @click="search" />
      </template>
    </van-nav-bar>
    <div class="list">
      <ul class="left">
        <li v-for="item in productsArr" :key="item._id">
          {{ item }}
        </li>
      </ul>

<<<<<<< HEAD
=======
    <div class="left">
      <div class="list">
        <ul>
          <li v-for="item in productsArr" :key="item._id" @click="listCategory(item.product_category)">
            <p>{{ item }}</p>
          </li>
        </ul>
      </div>
    </div>

    <div class="maskBox" @touchmove.prevent>
>>>>>>> 134c348fdd07678a84b6294a14ff7be64890c09f
      <div class="right">
        <div class="shop">
          <div
            v-for="item in products"
            :key="item._id"
            class="shopList"
            @touchmove.prevent
            @click="loadDetail(item._id)"
          >
            <img :src="item.image" alt="" />
            <p>{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>

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
      productsArr: [],
    };
  },
  computed: {},
  methods: {
    // 返回
    back() {
      this.$router.push("/");
    },
    // 搜索
    search() {
      this.$router.push("/search");
    },
    // 初始化列表
    async loadProduct() {
      const res = await reqProducts({ per: 107 });
      this.products = res.data.products;
<<<<<<< HEAD
      // 筛选一级标题
=======
      
>>>>>>> 134c348fdd07678a84b6294a14ff7be64890c09f
      this.products.forEach((v) => {
        if (this.productsArr.some((it) => it == v.category.name) == false) {
          this.productsArr.unshift(v.category.name);
        }
        
      });
      console.log(this.productsArr);
    },
    // 跳转详情
    loadDetail(id) {
      this.$router.push({
        name: "Detail",
        query: { id },
      });
    },
     listCategory(product_category){
      // const classify = await reqProducts({
      //   product_category
      // })
      console.log(product_category);
    },
  },
  created() {
    this.loadProduct();
  },
};
</script>
<style scoped>
.list {
  position: relative;
  padding: 3rem 0 5rem;
}
.left {
  float: left;
  width: 6rem;
  height: 40rem;
  background-color: white;
  border-right: solid 1px #ccc;
  position: fixed;
  overflow-y: auto;
}
.left li {
  height: 4rem;
  text-align: center;
  line-height: 4rem;
}
.left li:first-child {
  color: #fb7d34;
  font-size: 1.4rem;
}

.right {
  float: right;
  width: 19rem;
  height: 42.5rem;
  background-color: white;
  overflow-y: auto;
}
.shop {
  width: 19rem;
  min-height: 63rem;
  background-color: white;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: center;
  justify-content: space-around;
}
.shopList {
  width: 8rem;
  height: 9rem;
  padding-bottom: 3rem;
}
.van-nav-bar {
  background-color: #f2f2f2;
}
::v-deep .van-icon {
  font-size: 30px;
  color: #9e9e9e;
}
.cart-list {
  background: #f5f5f5;
}
::v-deep .van-ellipsis {
  color: #66667d;
  font-size: 18px;
}
.van-icon {
  font-size: 25px;
}
img {
  width: 120px;
  height: 120px;
}
</style>