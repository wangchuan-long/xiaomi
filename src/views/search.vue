<template>
  <div class="register">
    <div class="search">
      <form action="/">
        <van-search
          v-model="value"
          show-action
          background="#F2F2F2"
          placeholder="请输入搜索关键词"
          @search="onSearch"
          @cancel="onCancel"
        />
      </form>
    </div>
    <div class="list">
      <van-list v-for="item in list" :key="item._id">
        <van-card
          tag="-90%"
          :origin-price="item.price * 10"
          :price="item.price"
          :desc="item.desc"
          :title="item.name"
          :thumb="item.image"
          @click="goDetail(item._id)"
        />
      </van-list>
    </div>
  </div>
</template>

<script>
import { reqProducts } from "../api/product";
export default {
  components: {},
  data() {
    return {
      value: "",
      list: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 返回
    onCancel() {
      this.$router.go(-1);
    },
    // 搜索商品
    async onSearch() {
      const result = await reqProducts({ name: this.value });
      console.log(result);
      if (result.status === 200) {
        this.list = result.data.products;
      }
    },
    // 跳转到详情页
    goDetail(id) {
      this.$router.push({
        name: "Detail",
        query: { id },
      });
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.register .search {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}
.register .list {
  padding-top: 54px;
}
.van-search__content {
  background: #fff;
}
</style>
