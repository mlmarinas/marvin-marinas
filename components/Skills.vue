<template>
  <section class="skills">
    <h2 class="skills__title"><strong>Here's what I can do.</strong></h2>
    <p class="skills__subtitle">
      If you have any special requests, feel free to contact me.
    </p>
    <div class="skills__grid">
      <div class="card">
        <img src="../assets/images/browser.svg" class="skills__icon" />
        <h3 class="card__title">Web Development</h3>
        <p class="card__excerpt">
          I can build you a responsive website, get you a domain name, and set up your own web server.
        </p>
      </div>
      <div class="card">
        <img src="../assets/images/paint-brush.svg" class="skills__icon" />
        <h3 class="card__title">Graphics</h3>
        <p class="card__excerpt">
          I can create and modify images and vectors with Adobe Illustrator, Adobe Photoshop, Affinity Photo, and Affinity Designer! 
        </p>
      </div>
      <div class="card">
        <img src="../assets/images/brand.svg" class="skills__icon" />
        <h3 class="card__title">Branding</h3>
        <p class="card__excerpt">
          I can create a logo for your brand and set up your social media accounts for your web presence. 
        </p>
      </div>
    </div>
    <div class="skills__btn-box">
      <a href="#" class="btn">
        View some of my work
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.skills {
  background: url("../assets/images/background.png");
  background-size: repeat;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.15);
  &__icon {
    height: 50%;
    margin-bottom: 2rem;
  }
  &__title,
  &__subtitle {
    margin-bottom: 2.2rem;
  }

  &__btn-box {
    margin-top: 10rem;
  }

  &__btn {
    width: 2.5rem;
  }
}

/* Grid Container */
.skills__grid {
  display: grid;
  margin-top: 3rem;
  grid-template-columns: repeat(3, 32rem);
  grid-template-rows: repeat(1, 34rem);
  grid-gap: 3rem;
}

/* Cards */
.card {
  background: white;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 3rem 2rem;
  border-radius: 0.4rem;
  &__title {
    margin-bottom: 1rem;
  }
  &__excerpt {
    text-align: center;
    flex-grow: 2;
  }
}
</style>
