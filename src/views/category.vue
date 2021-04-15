<template>
  <div class="category">
    <van-nav-bar fixed title="分类" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="27" color="#666" @click="back" />
      </template>
      <template #right>
        <van-icon name="search" size="27" color="#666" @click="search" />
      </template>
    </van-nav-bar>
    <div class="list">
      <!-- <van-sidebar v-model="activeKey" v-for="item in productsArr" :key="item._id" @change="onChange">  
        <van-sidebar-item :title="item" />
      </van-sidebar> -->
      <ul class="left">
        <li v-for="(item, index) in productsArr" :key="item._id">
          <div
            @click="btnChangeColor(index, item.id)"
            :class="index == Sactive ? 'active' : ''"
          >
            {{ item.name }}
            <!-- {{index}} -->
          </div>
        </li>
      </ul>

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
      Sactive: 0,
    };
  },
  computed: {},
  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    // 搜索
    search() {
      this.$router.push("/search");
    },
    // 初始化列表
    async loadProduct() {
      const res = await reqProducts({ per: 107 });
      this.products = res.data.products;
      // 筛选一级标题
      this.products.forEach((v) => {
        if (
          this.productsArr.some((it) => it.name == v.category.name) == false
        ) {
          // console.log(v);
          // this.productsArr.unshift(v.category.name);
          let obj = { name: v.category.name, id: v.product_category };
          this.productsArr.unshift(obj);
        }
      });
      this.productsArr.unshift({ name: "全部", id: 0 });
      // console.log(this.productsArr);
    },
    // 跳转详情
    loadDetail(id) {
      this.$router.push({
        name: "Detail",
        query: { id },
      });
    },
    // 改变分类名称的颜色
    async btnChangeColor(index, id) {
      if (index == 0) {
        this.loadProduct();
      } else {
        const result = await reqProducts({ cateId: id });
        console.log(result, id);
        console.log(this.Sactive);
        if (result.status == 200) {
          this.products = result.data.products;
        }
      }
      // console.log(id);
      this.Sactive = index;
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
  width: 7rem;
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
.active {
  color: #fb7d34;
  font-size: 1.3rem;
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
  align-content: flex-start;
}
.shopList {
  width: 8rem;
  height: 9rem;
  padding-bottom: 3rem;
}
img {
  width: 120px;
  height: 120px;
}
</style>