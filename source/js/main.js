// Мобильное бургер-меню

const handleMobileMenu = (() => {
  const siteNavigation = document.querySelector('.page-header');
  const siteNavigationToggle = document.querySelector('.page-header__toggle');
  const body = document.querySelector('body');

  return {
    showNav: () => {
      if (siteNavigationToggle) {

        siteNavigationToggle.addEventListener('click', (evt) => {
          evt.preventDefault();
          siteNavigation.classList.toggle('page-header--open');
          body.style.overflow = 'hidden';

          if (!siteNavigation.classList.contains('page-header--open')) {
            body.style.overflow = 'scroll';
          }
        })
      }
    }
  }
})()

handleMobileMenu.showNav();

// Попап логин

const handleLoginPopup = (() => {
  const body = document.querySelector('body');
  const loginButton = document.querySelector('.page-header__link--login');
  const loginPopup = document.querySelector('.popup-login');
  const loginPopupCloseButton = document.querySelector('.popup-login__close-button');
  const popupOverlay = document.querySelector('.overlay');
  const ESC_KEY_CODE = 27;

  return {

    showPopup: () => {
      if (loginButton) {
        loginButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          loginPopup.classList.remove('popup-login--hide');
          popupOverlay.classList.add('overlay--active');
          const popupInputEmail = document.getElementById('email-popup');
          popupInputEmail.focus();
          body.style.overflow = 'hidden';
        })
        document.addEventListener('keydown', (evt) => {
          if (evt.keyCode === ESC_KEY_CODE) {
            loginPopup.classList.add('popup-login--hide');
            popupOverlay.classList.remove('overlay--active');
            body.style.overflow = 'scroll';
          }
        })
        document.addEventListener('click', (evt) => {
          if (evt.target === popupOverlay) {
            loginPopup.classList.add('popup-login--hide');
            popupOverlay.classList.remove('overlay--active');
            body.style.overflow = 'scroll';
          }
        })
        loginPopupCloseButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          loginPopup.classList.add('popup-login--hide');
          popupOverlay.classList.remove('overlay--active');
          body.style.overflow = 'scroll';
        })
      }
    }
  }
})()
handleLoginPopup.showPopup();

// Аккордеон на главной странице

const handleAccordion = (() => {
  const accordion = document.getElementById('accordion');

  const hideAll = () => {
    const h3El = accordion.querySelectorAll('h3');
    const divEl = accordion.querySelectorAll('.tab-content');

    for (let i = 0; i < h3El.length; i++) {
      h3El[i].classList.remove('accordion-title--select');
    }
    for (let i = 0; i < divEl.length; i++) {
      divEl[i].style.height = '0';
    }
  }

  const showText = (textEl) => {
    textEl.style.height = textEl.scrollHeight + 'px';
  }

  return {

    manageAccordion: () => {
      if (accordion) {

        accordion.addEventListener('click', (evt) => {

          const targ = evt.target;
          if (targ.tagName !== 'H3') return;

          if (targ.classList.contains('accordion-title--select')) {
            hideAll();
          } else {
            hideAll();
            targ.classList.add('accordion-title--select');
            showText(targ.nextElementSibling);
          }
        })
      }
    }
  }
})()
handleAccordion.manageAccordion();

// Аккордеон на странице каталога

const handleFilter = (() => {
  const accordion = document.getElementById('filter');

  const showText = (textEl) => {
    textEl.style.height = textEl.scrollHeight + 'px';
  }

  const hideText = (textItem) => {
    textItem.style.height = '0';
  }

  return {

    manageFilter: () => {
      if (accordion) {

        accordion.addEventListener('click', (evt) => {

          const targ = evt.target;
          if (targ.tagName !== 'H3') return;

          if (!targ.classList.contains('filter-title--select')) {
            targ.classList.add('filter-title--select');
            showText(targ.nextElementSibling);
          } else {
            targ.classList.remove('filter-title--select');
            hideText(targ.nextElementSibling);
          }
        })
      }
    }
  }
})()
handleFilter.manageFilter();


// Слайдер Swiper

new Swiper('.slider-swiper', {

  navigation: {
    nextEl: '.slider-swiper__button-next-slide',
    prevEl: '.slider-swiper__button-prev-slide',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  spaceBetween: 30,

  breakpoints: {
    320: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      simulateTouch: true,
      touchRatio: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: false,
        renderFraction: function (currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' of ' + '<span class="' + totalClass + '"></span>';
        },
      },
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      simulateTouch: true,
      touchRatio: 1,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
      simulateTouch: false,
      touchRatio: 0,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    },
  },
});


// Появление попапа с фильтром на странице каталога

const handlePopup = (() => {
  const filterButton = document.querySelector('.goods__button-filter');
  const filterPopup = document.querySelector('.popup-filter');
  const filterPopupCloseButton = document.querySelector('.popup-filter__close-button');
  const popupOverlay = document.querySelector('.overlay');
  const ESC_KEY_CODE = 27;

  return {

    showPopup: () => {
      if (filterButton) {
        filterButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          filterPopup.classList.remove('popup-filter--hide');
          popupOverlay.classList.add('overlay--active');
          scrollTo({top: 320, behavior: 'smooth'});
        })
        document.addEventListener('keydown', (evt) => {
          if (evt.keyCode === ESC_KEY_CODE) {
            filterPopup.classList.add('popup-filter--hide');
            popupOverlay.classList.remove('overlay--active');
          }
        })
        filterPopupCloseButton.addEventListener('click', (evt) => {
          evt.preventDefault();
          filterPopup.classList.add('popup-filter--hide');
          popupOverlay.classList.remove('overlay--active');
        })
      }
    },

    useFilterAccordion: () => {
      const filterAccordion = document.querySelector('.filter');

      const showText = (textEl) => {
        textEl.style.height = textEl.scrollHeight + 'px';
      }

      const hideText = (textItem) => {
        textItem.style.height = '0';
      }

      if (filterAccordion) {

        filterAccordion.addEventListener('click', (evt) => {

          const targ = evt.target;
          if (targ.tagName !== 'H3') return;

          if (!targ.classList.contains('accordion-title--select')) {
            targ.classList.add('accordion-title--select');
            showText(targ.nextElementSibling);
          } else {
            targ.classList.remove('accordion-title--select');
            hideText(targ.nextElementSibling);
          }
        })
      }
    }
  }
})()
handlePopup.showPopup();
handlePopup.useFilterAccordion();

// Валидатор поля пароля

(function validatePassword() {
  const inputsPassword = document.querySelectorAll('input[type*="password"]');
  for (let input of inputsPassword) {
    input.addEventListener('invalid', () => {
      if (input.validity.valueMissing) {
        input.setCustomValidity('Введите пожалуйста Ваш пароль');
      } else if (input.value.length < 8) {
        input.setCustomValidity('Пароль должен состоять минимум из 8ми символов');
      } else if (input.validity.patternMismatch) {
        input.setCustomValidity('Пароль должен содержать хотя бы одну цифру, одну латинскую букву в верхнем регистре и одну в нижнем');
      } else {
        input.setCustomValidity('');
      }
    })
  }
})();
