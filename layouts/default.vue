<template>
  <div>
    <TheNav />
    <Header />
    <Skills />
  </div>
</template>

<script>
import TheNav from "./partials/TheNav";
import Header from "./header";
import Skills from "./skills";

export default {
  components: {
    TheNav,
    Header,
    Skills
  }
};
</script>

<style>
html {
  background-color: white;
  font-size: 62.5%;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Open Sans", sans-serif;
}

a {
  text-decoration: none;
}

</style>
