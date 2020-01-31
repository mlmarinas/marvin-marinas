<template>
  <div>
    <TheNav />
    <Header />
    <Skills />
    <Portfolio />
  </div>
</template>

<script>
import TheNav from "@/layouts/partials/TheNav";
import Header from "@/components/Header";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default {
  components: {
    TheNav,
    Header,
    Skills,
    Portfolio
  }
};
</script>

<style lang="scss">
/* Default Styling */
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
  line-height: 2.5rem;
  color: #444444;
  font-weight: 300;
  font-family: "Open Sans", sans-serif;
}

b,
strong,
h2 {
  font-weight: 700;
  color: #3e3e3e;
}

a {
  text-decoration: none;
}

h2 {
  font-size: 4rem;
}

h3 {
  font-size: 2.2rem;
}

p {
  font-size: 1.8rem;
}

a {
  text-decoration: none;
}

/* Color Variables */
$blue--light: #217dbb;
$blue--dark: #1f74ac;

/* Buttons */
.btn {
  &:visited,
  &:link {
    color: white;
    background-color: $blue--dark;
    padding: 2rem 4rem;
    width: 100%;
    border-radius: 1rem;
    font-size: 2.6rem;
    font-weight: 600;
    text-align: center;
  }
  &:hover {
    background-color: $blue--light;
  }
}
</style>
