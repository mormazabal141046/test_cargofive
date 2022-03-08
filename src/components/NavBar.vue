
<template>
    <div class="center examplex">
      <vs-navbar target-scroll="#padding-scroll-content" padding-scroll center-collapsed v-model="active">
        <template #left>
          <img src="https://cargofive.com/wp-content/uploads/2018/07/logo.svg" alt="" style="width:180px;">
        </template>
        <vs-navbar-item :active="active == 'guide'" id="guide">
          Guide
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item>
        <template #right>
          <vs-button flat >Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
    </div>
</template>
<script>
  export default {
    data:() => ({
      active: 'guide'
    })
  }
</script>
<style scoped>
    .child{
        background: red;
        height: 50vh;
    }

</style>

        