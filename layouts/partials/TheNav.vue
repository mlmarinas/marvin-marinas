<template>
  <nav class="nav">
    <ul class="nav__menu">
      <li class="nav__item">
        <a href="#skills" class="nav__link">Skills</a>
      </li>
      <li class="nav__item">
        <a href="#portfolio" class="nav__link">Portfolio</a>
      </li>
      <li class="nav__item">
        <a href="#footer" class="nav__link">Contact</a>
      </li>
      <li class="nav__item">
        <a href="#footer" class="nav__link">Blog</a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scope>
.nav {
  display: flex;
  height: 6rem;
  justify-content: center;
  align-items: center;
  background-color: #282828;
  width: 100vw;
  &__menu {
    font-size: 1.6rem;
  }
  &__item {
    display: inline;
  }
  &__link {
    &:visited,
    &:link {
      font-size: 1.6rem;
      margin: 0 2rem 0 2rem;
      font-weight: 600;
      color: white;
    }
    &:hover,
    &:focus {
      color: #217dbb;
    }
  }
}
</style>
