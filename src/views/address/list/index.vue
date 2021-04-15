<template>
  <div class="list">
    <van-nav-bar fixed title="收货地址" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="back" />
      </template>
    </van-nav-bar>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      :disabled-list="disabledList"
      disabled-text="以下地址超出配送范围"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
    />
  </div>
</template>

<script>
import { reqResslist } from "../../../api/address";
export default {
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      list: [],
      disabledList: [
        {
          id: "999",
          name: "奥特曼",
          tel: "19999999999",
          address: "M78星云",
        },
      ],
    };
  },
  computed: {},
  watch: {
    "$route.path": function (newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    $route(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
  },

  methods: {
    // 返回
    back() {
      let routeObj = this.$store.getters.getRoute;
      // 如果从我的进来 返回到我的 否则统一返回到结算页面
      if (routeObj.oldVal === "mine") {
        this.$router.push("/mine");
      } else {
        this.$router.push("/order");
      }
    },
    // 添加地址
    onAdd() {
      this.$router.push("/address/add");
    },
    // 修改地址
    onEdit(index) {
      console.log(index);
      this.$router.push({
        name: "Edit",
        query: { id: index.id },
      });
    },
    // 初始化地址列表
    async init() {
      const result = await reqResslist();
      console.log(result);
      if (result.status === 200) {
        result.data.addresses.forEach((v) => {
          if (v.isDefault == true) {
            this.chosenAddressId = v._id;
          }
          let obj = {
            id: v._id,
            name: v.receiver,
            tel: v.mobile,
            address: v.regions + v.address,
            isDefault: v.isDefault,
          };
          this.list.unshift(obj);
        });
      }
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
.van-address-list {
  padding-top: 54px;
}
.van-address-list__bottom {
  bottom: 20px;
}
.van-nav-bar .van-icon {
  color: #9e9e9e;
}
</style>
