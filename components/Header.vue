<template>
    <header class="header">
      <div class="header__img"></div>
      <div class="header__text">
        <h1 class="header__title">
          Hi. I'm
          <b>Marvin.</b>
        </h1>
        <p class="header__subtitle">
          and I am a
          <strong>Web Developer</strong>. This is my portfolio where you can view
          some of my work and get in touch with me.
        </p>
        <div class="header__btn-container">
          <a href="#" class="btn ">See what I can do</a>
        </div>
      </div>
    </header>
</template>

<style lang="scss" scoped>
/* Header */
.header {
  height: 64rem;
  background: white;
  position: relative;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  box-shadow: 0 0.4rem 0.4rem -0.2rem rgba(0, 0, 0, 0.2);
  &__img {
    background: url("../assets/images/marv.jpg");
    background-size: cover;
    background-position: center top;
    border-radius: 100%;
    width: 30rem;
    height: 30rem;
    align-self: center;
    margin-left: 17rem;
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 45%;
    margin-left: 5rem;
  }
  &__title {
    color: black;
    font-size: 5.6rem;
    font-weight: 300;
    margin-bottom: 4rem;
  }
  &__subtitle {
    font-size: 2.6rem;
    line-height: 4rem;
    margin-bottom: 6rem;
  }
}
</style>
