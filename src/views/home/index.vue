<template>
  <div class="home">
    <div class="home_top">
      <van-search
        show-action
        v-model="value"
        @focus="goSearch"
        placeholder="搜索商品名称"
      >
        <template #left>
          <van-icon
            name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAATKADAAQAAAABAAAAMgAAAABQW5lOAAADMUlEQVRoBe2bPYgTQRTH/5NcFBU9ULQQtREUET3FQsXGyuLQRhDBxtqP4xBUsDsbQYRDPRGsBNsT4RoRVBA7PxpBQe1EPT/AIqJ3553J879JhjRmfS+3I9lkHmxmNvPftzO/vJmd3Z0A0UwEnBzHCwi2mo7KTjxHV3NwmK2lSR74we0Tt8naJkwdPqLAeo7hjXOsbUYmp7EEU3hLj6tVLgsYdXIsuwqoTjo/UZnwHnMbJ8AJN4bv83Enw1jHn+qd2ofDw4Ja3BnCfv68B1DFLVQwKSdwQU5h+f+sWt6ANdkIu1MV5/ALr+Uk9jYLwubyC8xzEawkuPsciw/7r0Km+QeW0BH08fOmDGEgJKzEd3cAS1oiWITfhCa8JAS07gFWh7QdQzgYkFcXRZinVMGwz4ZIuy3CwA65h1dN3US0DaLJYKk3h58cXnehhM/6g1KU0/TmsKy2VbCGyo3MD3A8GmS+P+XI1kXCXlPlXA240VrUfokNGG9Z3FW8bP90fz3Sw3/uS2UEC/AV+7l/mfDW+u/VqWA3tUGAdWSXdCOYdddxB0uxhQ1/oAblhQ47fTbrtCOB+Ua6iyijiKPcL/vvVKlgfajpRUcDS+C4a7WnFedVoJqiEs7wDiCAdTywRptvm9s+FeZKmQtgHM/e8+r5ygTN9TCwBqgnJmAIA8w6rVDVmU8ONlG4TSWuP2W9xyhKnrS2NocPnGJYbJVFrNUGAcaTj7Nxm7WV4FTzLLWXUvVCYDZbaJPr1KHGsMW60zdUAo3+m8kneD8SwEIBy76qwmerFhPeLQSw/AAr1N4sWRD0eIS52is4PTDp9S6pR+WVRZ/JMs1Pl7S22nGqG8C6F1gAWInLCMwINgKLwIwEjPIYYRGYkYBRHiMsAjMSMMpjhEVgRgJGeYywCMxIwCiPERaBGQkY5THCIjAjAaM8RlgEZiRglMcIi8CMBIzyGGFtAJtRHyPQarW6+qk1fp363L450z6TktrepgMzfVzHvI//DNuQ4rRZJHjW3EnNHeFLrh2pCl/o+P+NEib8bst0BZ5yofAhlv97dbVwHXUJd1v6ahS4K/jCJeqDVOuWqRfx6A+5CpLYo3H97gAAAABJRU5ErkJggg=="
            size="27"
          />
        </template>
        <template #action>
          <van-icon name="contact" size="27" color="#666" @click="goMine" />
        </template>
      </van-search>
      <van-tabbar
        v-model="active"
        :fixed="false"
        active-color="#EE752A"
        inactive-color="#666"
      >
        <van-tabbar-item to="/home/recommend">推荐</van-tabbar-item>
        <van-tabbar-item to="/home/phone">手机</van-tabbar-item>
        <van-tabbar-item to="/home/intellect">智能</van-tabbar-item>
        <van-tabbar-item to="/home/tv">电视</van-tabbar-item>
        <van-tabbar-item to="/home/family">家电</van-tabbar-item>
        <van-tabbar-item to="/home/computer">笔记本</van-tabbar-item>
      </van-tabbar>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      active: 0,
      value: "",
    };
  },
  computed: {},
  watch: {},

  methods: {
    // 我的
    goMine() {
      this.$router.push("/mine");
    },
    // 搜索
    goSearch() {
      this.$router.push("/search");
    },
  },
  created() {
    let Val = this.$store.getters.getRoute;
    console.log(Val);
    if (Val.newVal == "/home/recommend") {
      this.active = 0;
    } else if (Val.newVal == "/home/phone") {
      this.active = 1;
    } else if (Val.newVal == "/home/intellily") {
      this.active = 2;
    } else if (Val.newVal == "/home/tv") {
      this.active = 3;
    } else if (Val.newVal == "/home/family") {
      this.active = 4;
    } else {
      this.active = 5;
    }
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.van-search__action .van-icon {
  padding-top: 10px;
}
.van-icon > img {
  padding: 0 10px;
}
.van-search--show-action {
  padding: 0;
  background: #f2f2f2;
}
.van-search__content {
  border-radius: 17px;
  background: #fff;
}
.van-tabbar--unfit {
  background: #f2f2f2;
  margin-top: -1px;
}
.van-tabbar-item {
  font-size: 16px;
}
.van-tabbar-item--active {
  background-color: #f2f2f2;
  border-bottom: solid 2px #ee752a;
}
::v-deep .van-grid-item__content {
  padding: 5px;
}
.home_top {
  width: 100%;
  height: 90px;
  position: fixed;
  top: 0;
  z-index: 1;
}
</style>
