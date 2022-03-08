<template>
  <div class="home">
    <!-- <NavBar></NavBar> -->
    <SideBar></SideBar>
    <Ports></Ports>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar'
import SideBar from '@/components/SideBar'
import Ports from '@/components/Ports'

export default {
  name: 'Home',
  components: {
    NavBar,
    SideBar,
    Ports
  }
}
</script>
