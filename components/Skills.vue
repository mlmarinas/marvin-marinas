<template>
  <section class="skills">
    <h2 class="skills__title"><strong>Here's what I can do.</strong></h2>
    <p class="skills__subtitle">
      If you have any special requests, feel free to contact me.
    </p>
    <div class="skills__grid">
      <div class="card">
        <h3 class="card__title">Web Development</h3>
        <svg class="skills__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 448"><path d="M416 40H32C14.4 40 0 54.4 0 72v304c0 17.6 14.4 32 32 32h384c17.6 0 32-14.4 32-32V72C448 54.4 433.6 40 416 40zM432 376c0 9.6-6.4 16-16 16H32c-9.6 0-16-6.4-16-16V136h416V376zM432 120H16V72c0-9.6 6.4-16 16-16h384c9.6 0 16 6.4 16 16V120z"/><circle cx="176" cy="88" r="16"/><circle cx="112" cy="88" r="16"/><circle cx="48" cy="88" r="16"/><rect x="272" y="232" width="112" height="16"/><rect x="272" y="280" width="112" height="16"/><rect x="272" y="328" width="64" height="16"/><polygon points="258.6 174.9 144 289.4 107.2 252.5 95.9 263.8 144 312 208 248 208 328 80 328 80 200 208 200 224 184 64 184 64 344 224 344 224 232 269.9 186.2 "/></svg>
        <p class="card__excerpt">
          I can build you a responsive website, get you a domain name, and set
          up your own web server.
        </p>
      </div>
      <div class="card">
        <h3 class="card__title">Graphics</h3>
        <svg class="skills__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 325 325"><path d="M322.5 12.2c-1.1-1.2-3.2-2.5-6.5-2.5 -4.2 0-17.1 0-96.1 67.5 -32.9 28.1-70.3 62.2-102 92.8 0 0 0 0-0.1 0.1 0 0 0 0 0 0.1 -9.2 8.9-17.9 17.4-25.8 25.4 -49.3 6-55.7 37.6-60.8 63 -4.4 21.8-7.6 33.3-25.6 34.7 -2.8 0.2-5 2.3-5.4 5.1 -0.4 2.7 1.1 5.5 3.6 6.5 1 0.4 25.3 10.5 53.8 10.5 0 0 0 0 0 0 31.2 0 70.9-12.3 83.8-69.8 37.5-38.1 85.3-91.2 122.2-135.9 20.3-24.6 35.9-44.8 46.4-60.2C324.7 27.6 328.1 17.8 322.5 12.2zM122 182.7l32 32.4c-6.3 6.6-12.4 13-18.3 19l-32.5-32.9C109.1 195.3 115.4 189.1 122 182.7zM57.5 303.4c0 0 0 0 0 0 -12.1 0-23.5-2.2-32.3-4.4 11.8-8.5 14.9-24 17.8-38.1 5-24.8 9.8-48.2 49.7-53.4l36.6 37.1C119.9 283.5 95.8 303.4 57.5 303.4zM249.2 108.1c-26.4 31.6-58 67.3-87 98.2l-31.6-32c30.5-29.3 65.8-61.3 97-88 54.2-46.3 75.8-59.5 83.9-63.2C307.9 31.3 295 53.1 249.2 108.1z"/></svg>
        <p class="card__excerpt">
          I can create and modify images and vectors with Adobe Illustrator,
          Adobe Photoshop, Affinity Photo, and Affinity Designer!
        </p>
      </div>
      <div class="card">
        <h3 class="card__title">Branding</h3>
        <svg class="skills_icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 184.1 184.1"><path d="M182.2 54.8c-1.7-1.3-4-1.2-5.6 0l-48.5 37L96.3 20c-1.5-3.4-7.1-3.4-8.6 0l-32.2 72.7L7.6 54.9c-1.7-1.3-4-1.3-5.7-0.1 -1.7 1.3-2.3 3.5-1.6 5.4l33.4 86.2c0.7 1.8 2.4 3 4.4 3h108c1.9 0 3.7-1.2 4.4-3l33.4-86.2C184.5 58.3 183.9 56.1 182.2 54.8zM142.9 140.1h-101.6L15.2 72.8l39.4 30.9c1.1 0.9 2.6 1.2 4 0.9 1.4-0.3 2.6-1.3 3.2-2.6l30.3-68.5 29.9 67.6c0.6 1.3 1.7 2.3 3.1 2.6 1.4 0.4 2.9 0.1 4-0.8l40-30.5L142.9 140.1zM150.2 162c0 2.6-2.1 4.7-4.7 4.7H38.5c-2.6 0-4.7-2.1-4.7-4.7s2.1-4.7 4.7-4.7h107C148.2 157.3 150.2 159.4 150.2 162z"/></svg>
        <p class="card__excerpt">
          I can create a logo for your brand and set up your social media
          accounts for your web presence.
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
