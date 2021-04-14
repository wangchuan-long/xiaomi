<template>
  <div class="category">
    <van-nav-bar title="分类" left-text="" left-arrow fixed>
      <template #right>
        <van-icon name="search" size="30" />
      </template>
    </van-nav-bar>

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
    async loadProduct() {
      const res = await reqProducts({ per: 107 });
      this.products = res.data.products;
      
      this.products.forEach((v) => {
        if (this.productsArr.some((it) => it == v.category.name) == false) {
          this.productsArr.unshift(v.category.name);
        }
        
      });
      console.log(this.productsArr);
    },
    loadDetail(id) {
      this.$router.push({
        name: "Detail",
        query: {
          id,
        },
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
html,
body {
  position: relative;
}
.zw {
  height: 4rem;
  width: 100%;
  position: absolute;
  bottom: 0;
}
.left {
  float: left;
  width: 6rem;
  height: 35rem;
  background-color: white;
  position: fixed;
}
.left ul {
  padding-top: 3rem;
}
.left ul li {
  height: 3 rem;
  text-align: center;
  line-height: 3rem;
  background-color: white;
}
.right {
  float: right;
  width: 19rem;
  height: 42.5rem;
  background-color: white;
  padding-top: 3rem;

  padding-bottom: 5rem;
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
</style>