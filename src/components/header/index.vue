<template>
  <div class="header">
    <slot name="left"></slot>
    <slot></slot>
    <slot name="right"></slot>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},

  methods: {
    // 返回
    back() {
      this.$router.go(-1);
    },
    // 搜索
    search() {
      this.$router.push("/search");
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
<style scoped></style>