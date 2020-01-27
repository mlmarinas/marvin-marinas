<template>
  <section class="work">
    <h2 class="work__title"><strong>Here's what I can do.</strong></h2>
    <p class="work__subtitle">
      If you have any special requests, feel free to contact me.
    </p>
    <div class="work__grid work-grid">
      <div class="work-grid__card work-card">
        <i class="far fa-window-alt"></i>
        <h3 class="work-card__title">Web Development</h3>
        <p class="work-card__excerpt">
          Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
          amet consequat lorem dolore.
        </p>
      </div>
      <div class="work-grid__card work-card">
        <i class="fas fa-paint-brush-alt"></i>
        <h3 class="work-card__title">Graphics</h3>
        <p class="work-card__excerpt">
          Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
          amet consequat lorem dolore.
        </p>
      </div>
      <div class="work-grid__card work-card">
        <i class="fas fa-crown"></i>
        <h3 class="work-card__title">Branding</h3>
        <p class="work-card__excerpt">
          Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed
          amet consequat lorem dolore.
        </p>
      </div>
    </div>
    <div class="work__btn-box">
      <a href="#" class="btn">
        View some of my work
      </a>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.work {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 14rem 0;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.15);

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
.work-grid {
  display: grid;
  margin-top: 3rem;
  grid-template-columns: repeat(3, 32rem);
  grid-template-rows: repeat(1, 34rem);
  grid-gap: 3rem;
}

/* Cards */
.work-card {
  background: white;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 3.2rem 6rem 3.2rem;
  border-radius: 0.4rem;

  &__title {
    margin-bottom: 2rem;
  }

  &__excerpt {
    text-align: center;
  }
}

/* Card Icons */
.fa-window-alt,
.fa-paint-brush-alt,
.fa-crown {
  font-weight: 400;
  font-size: 10.3rem;
  color: #1f74ac;
  margin-bottom: 3rem;
}
</style>
