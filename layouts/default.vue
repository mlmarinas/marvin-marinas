<template>
  <div>
    <TheNav />
    <Header />
    <Skills />
  </div>
</template>

<script>
import TheNav from './partials/TheNav'
import Header from './header'
import Skills from './skills'
export default {
  components: {
    TheNav,
    Header,
    Skills
  }
}

</script>