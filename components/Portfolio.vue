<template>
  <!-- Portfolio -->
  <section class="portfolio">
    <h2 class="portfolio__title">
      <strong>Here's some projects that I have worked on.</strong>
    </h2>
    <p class="portfolio__excerpt">
      I will continue to add more as I complete the projects.
    </p>
    <div class="portfolio-grid">
      <div class="card ">
        <img
          src="/images/portfolio__card-bg.jpg"
          alt="Web Design"
          class="card__img"
        />
        <div class="__text card-text">
          <h3 class="card-text__title">Graphic Design</h3>
          <p class="card-text__excerpt">
            Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
            amet consequat lorem dolore.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/portfolio__card-bg.jpg"
          alt="Web Design"
          class="card__img"
        />
        <div class="card-text">
          <h3 class="card-text__title">Graphic Design</h3>
          <p class="card-text__excerpt">
            Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
            amet consequat lorem dolore.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/portfolio__card-bg.jpg"
          alt="Web Design"
          class="card__img"
        />
        <div class="card-text">
          <h3 class="card-text__title">Graphic Design</h3>
          <p class="card-text__excerpt">
            Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
            amet consequat lorem dolore.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/portfolio__card-bg.jpg"
          alt="Web Design"
          class="card__img"
        />
        <div class="card-text">
          <h3 class="card-text__title">Graphic Design</h3>
          <p class="card-text__excerpt">
            Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
            amet consequat lorem dolore.
          </p>
        </div>
      </div>
      <div class="card">
        <img
          src="/images/portfolio__card-bg.jpg"
          alt="Web Design"
          class="card__img"
        />
        <div class="card-text">
          <h3 class="card-text__title">Graphic Design</h3>
          <p class="card-text__excerpt">
            Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
            amet consequat lorem dolore.
          </p>
        </div>
      </div>
      <div class="card ">
        <img
          src="/images/portfolio__card-bg.jpg"
          alt="Web Design"
          class="card__img"
        />
        <div class="card-text">
          <h3 class="card-text__title">Graphic Design</h3>
          <p class="card-text__excerpt">
            Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
            amet consequat lorem dolore.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.portfolio {
  padding: 14rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  &__title,
  &__excerpt {
    margin-bottom: 2.2rem;
  }
}

.portfolio-grid {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 38rem);
  grid-template-rows: repeat(2, 41rem);
  grid-gap: 3rem;
}

.card {
  background: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 0.4rem 0.4rem -0.2rem rgba(0, 0, 0, 0.2);
  &__img {
    width: 100%;
    height: 21rem;
  }
}

.card-text {
  padding: 3rem;
  text-align: center;
  &__excerpt {
    margin-top: 2rem;
  }
}
</style>
