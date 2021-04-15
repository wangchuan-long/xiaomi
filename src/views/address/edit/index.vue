<template>
  <div class="edit">
    <van-nav-bar fixed title="修改地址" class="van-ellipsis">
      <template #left>
        <van-icon name="arrow-left" size="30" @click="back" />
      </template>
    </van-nav-bar>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      show-search-result
      :address-info="AddressInfo"
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { Toast } from "vant";
import { areaList } from "@vant/area-data";
import { reqRessDetail, reqDelRess, reqChangeRess } from "../../../api/address";
export default {
  components: {},
  data() {
    return {
      areaList: areaList,
      searchResult: [],
      AddressInfo: {},
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 返回
    back() {
      this.$router.replace("/address/list");
    },
    // 保存地址
    async onSave(content) {
      let obj = {
        receiver: content.name,
        mobile: content.tel,
        regions: `${content.province}/${content.city}/${content.county} `,
        address: content.addressDetail,
        isDefault: content.isDefault,
      };
      console.log(obj);
      const result = await reqChangeRess({ id: this.id, params: obj });
      if (result.data.code === "success") {
        Toast.success("修改成功");
        console.log(result);
        this.$router.replace("/address/list");
      }
    },
    // 删除地址
    async onDelete() {
      const result = await reqDelRess(this.id);
      if (result.data.code === "success") {
        Toast.success("删除成功");
        this.$router.replace("/address/list");
      }
    },
    // 初始化
    async init(id) {
      const result = await reqRessDetail(id);
      if (result.status === 200) {
        this.AddressInfo = {
          id: result.data._id,
          name: result.data.receiver,
          tel: result.data.mobile,
          addressDetail: result.data.address,
          isDefault: result.data.isDefault,
        };
      }
    },
  },
  created() {
    this.id = this.$route.query.id;
    this.init(this.id);
  },
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
