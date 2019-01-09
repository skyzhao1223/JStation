<template>
  <div class="tools">
    <div id="nav">
      <router-link to="/tools" exact>工具箱</router-link> |
      <router-link :to="{ name: 'transformcss' }">Transformcss</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: '',
    };
  },
};
</script>
