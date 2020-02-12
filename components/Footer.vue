<template>
  <!-- Footer -->
  <footer class="footer">
    <h2 class="footer__title"><strong>Have me make things for you.</strong></h2>
    <p class="footer__excerpt">
      Fill out the form below and let's get in touch!
    </p>
    <!-- Footer Form-->
    <form class="footer__form form" action="#" method="get">
      <div class="form__name-email-container">
        <input type="text" name="name" placeholder="Name" class="form__name" />
        <input
          type="text"
          name="email"
          placeholder="Email"
          required
          class="form__email"
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        class="form__subject"
      />
      <textarea
        name="message"
        placeholder="Message"
        required
        class="form__message"
      ></textarea>
      <div class="form__buttons-container">
        <input type="submit" value="Send Message" class="form__submit" />
        <input type="reset" value="Clear Form" class="form__clear" />
      </div>
    </form>
    <!-- Footer Form Social-->
    <hr class="form__line--top" />
    <h3 class="form__social-header">You can find us on...</h3>
    <div class="form__icons">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
        <path
          d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"
        />
      </svg>
      <i class="fab fa-facebook-square"></i>
      <i class="fab fa-linkedin"></i>
      <i class="fab fa-github-square"></i>
    </div>
    <hr class="form__line--bottom" />
    <!--Copyright-->
    <ul class="footer__copyright">
      <li>
        © <a href="http://www.tornadoviral.com">TornadoViral</a>. All rights
        reserved.
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1359rem;
  background: #2f2f2f;
  &__title strong,
  &__excerpt {
    color: white;
  }
  text-align: center;
  padding: 14rem;
  &__title,
  &__excerpt {
    margin-bottom: 2.6rem;
  }
  //Form
  &__form {
    display: flex;
    flex-direction: column;
    width: 50%;
  }
}

.form {
  //Container for email & name input
  &__name-email-container {
    display: flex;
    justify-content: center;
    //Form Input
  }
  &__name,
  &__email,
  &__subject,
  &__message {
    padding: 0 1.3rem 0 1.3rem;
    border-radius: 0.8rem;
    background-color: #282828;
    border: none;
    color: #bbb;
    font-size: 2rem;
    box-shadow: inset 0px 2px 3px 1px rgba(0, 0, 0, 0.05),
      0px 1px 0px 0px rgba(255, 255, 255, 0.025);
    &:focus {
      color: #217dbb;
    }
  }
  &__name,
  &__email,
  &__subject {
    height: 5.8rem;
  }
  &__name,
  &__email,
  &__message {
    width: 100%;
  }
  &__subject,
  &__message {
    display: block;
    margin-top: 2.5rem;
  }
  &__email {
    margin-left: 2.5rem;
  }
  &__message {
    height: 26rem;
    resize: none;
  }
  //Form Buttons
  &__buttons-container {
    margin-top: 2.5rem;
  }
  &__submit,
  &__clear {
    padding: 2rem 4.5rem;
    border-radius: 0.8rem;
    border: none;
    color: white;
    font-weight: 70rem;
    text-shadow: -1px -1px 0.5px rgba(0, 0, 0, 0.5);
    transition: background-color 0.2s ease-in-out;
  }
  &__submit {
    background-color: #1f74ac;
    &:hover {
      background-color: #217dbb;
    }
  }

  &__clear {
    background-color: #3c3c3c;
    margin-left: 1rem;
  }
  &__submit,
  &__clear {
    font-size: 2rem;
    font-weight: 600;
  }
  //Social
  &__line--top,
  &__line--bottom {
    width: 50%;
    border: 0;
    border-top: solid 1px #444;
    border-top-color: rgba(0, 0, 0, 0.35);
    border-top: rgba(0, 0, 0, 0.35);
    box-shadow: 0px 1px 0px 0px rgba(255, 255, 255, 0.1);
    height: 0.1rem;
  }
  &__line--top {
    margin-top: 9rem;
  }
  &__social-header {
    margin-top: 5rem;
    color: white;
  }

  //Social Icons
  &__icons {
    margin-bottom: 5rem;
  }
}

.fa-twitter-square,
.fa-facebook-square,
.fa-linkedin,
.fa-github-square {
  font-weight: 400;
  font-size: 2rem;
  color: #444444;
  border-radius: 0.6rem;
  margin: 2rem 0.5rem 0 0.5rem;
  &:hover {
    color: #217dbb;
  }
}

//Copyright
.footer__copyright {
  text-decoration: none;
  list-style: none;
  font-weight: 300;
  font-size: 1.7rem;
  margin-top: 10rem;
  li {
    color: #666;
    a:link,
    a:visited {
      color: #666;
    }
    a:hover {
      color: #217dbb;
    }
  }
}
</style>
