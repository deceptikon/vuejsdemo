<template>
  <div class="page">
    <div class="header">
      Header
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
        <router-link to="/shop">Shop</router-link>
      </div>
    </div>
    <div class="container">
      <div class="sidebar">
        <slot name="sidebar">Default sidebar content</slot>
      </div>
      <div class="content">
        content
        <slot>No data passed to template</slot>
      </div>
    </div>
    <div class="footer">&copy; 2020 Footer here</div>
  </div>
</template>

<script>
export default {
  name: 'MyTemplate',
};
</script>

<style scoped>
  .header {
    background: #666;
    padding: 30px 10px;
  }
  .container {
    margin: 0 auto;
    max-width: 1000px;
    background: silver;
  }
  .content {
    margin-left: 300px;
  }
  .sidebar {
    background: #EEE;
    width: 300px;
    float: left;
  }
  .footer {
    background: #333;
    color: #FFF;
    padding: 10px 10px;
  } 
</style>