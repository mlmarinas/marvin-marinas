<template>
  <!-- Footer -->
  <footer class="footer" id="footer">
    <h2 class="footer__title"><strong>Have questions, comments, or requests?</strong></h2>
    <p class="footer__excerpt">
      Fill out the form below {{ name }} and let's get in touch!
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
    <h3 class="form__social-header">You can find me on...</h3>
    <div class="icons">
      <a href="http://www.github.com/mlmarinas" target="_blank">
        <font-awesome-icon
          :icon="['fab', 'github-square']"
          class="icons__btn icons__github"
        />
      </a>
      <a href="http://www.twitter.com/buffwire" target="_blank">
      <font-awesome-icon
        :icon="['fab', 'twitter-square']"
        class="icons__btn icons__twitter"
      />
      </a>
    </div>
    <hr class="form__line--bottom" />
    <!--Copyright-->
    <ul class="footer__copyright">
      <li>
        © <a href="http://www.marvinmarinas.com">marvinmarinas</a>. All rights
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
  background: #2f2f2f;
  text-align: center;
  padding: 14rem 0 1.5rem 0;
  &__title,
  strong,
  &__excerpt {
    color: white;
  }
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
}

//Social Icons
// path,
// circle,
// rect,
// polygon {
//   fill: #444444;
//   &:hover {
//     fill: #217dbb;
//   }
// }

.icons {
  margin-bottom: 5rem;
  &__btn {
    margin-top: 2rem;
    font-size: 5rem;
    color: red;
  }
  &__twitter {
    margin-left: 1rem;
    color: blue;
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
