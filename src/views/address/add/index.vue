<template>
  <div class="add">
    <van-nav-bar fixed title="增加地址" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="back" />
      </template>
    </van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-set-default
      show-search-result
      save-button-text="添加"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
  </div>
</template>

<script>
import { areaList } from "@vant/area-data";
import { reqAddRess } from "../../../api/address";
import { Toast } from "vant";
export default {
  components: {},
  data() {
    return {
      areaList: areaList,
      searchResult: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    // 添加地址
    async onSave(content) {
      let obj = {
        receiver: content.name,
        mobile: content.tel,
        regions: `${content.province}/${content.city}/${content.county} `,
        address: content.addressDetail,
        isDefault: content.isDefault,
      };
      const result = await reqAddRess(obj);
      if (result.data.code === "success") {
        Toast.success("地址添加成功");
        this.$router.replace("/address/list");
      }
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
.van-address-edit {
  padding-top: 54px;
}
.van-nav-bar .van-icon {
  color: #9e9e9e;
}
</style>
